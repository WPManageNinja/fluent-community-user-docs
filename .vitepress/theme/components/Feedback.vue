<script setup>
import { reactive, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

// --- CONFIGURATION ---
// Paste your Google Web App URL here
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwQPG7SqKCME-siL3xkDqOwCJ1WHOGuZCQZnZO0-7GgYACxeb6lNT1mjpvkJXrG0QxbqQ/exec'
// 2. PRODUCT NAME for each product repo (e.g. 'FluentCRM', 'FluentForms')
const PRODUCT_NAME = 'FluentCommunity-user-docs'
// ---------------------

const { page } = useData()
const route = useRoute()

const state = reactive({
  open: false,        // is the comment box expanded
  done: false,        // has final feedback been sent
  sending: false,     // in-flight guard for the Send button
  vote: null,         // 'yes' | 'no' | null
  votedSent: null,    // last vote value already posted (avoids duplicate posts)
  comment: ''         // free-text feedback
})

// Reset everything when navigating to a new page.
watch(() => route.path, () => {
  state.open = false
  state.done = false
  state.sending = false
  state.vote = null
  state.votedSent = null
  state.comment = ''
})

// Fire-and-forget POST to the Google Apps Script endpoint.
const post = (payload) => {
  return fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors', // Essential for skipping CORS checks
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify({
      product: PRODUCT_NAME,
      path: route.path,
      title: page.value.title,
      ...payload
    })
  })
}

// 👍 / 👎 — record the vote and show the thank-you. Does NOT open the comment box.
const vote = async (value) => {
  state.vote = value
  state.open = false
  state.done = true
  if (state.votedSent !== value) {
    state.votedSent = value
    try {
      await post({ vote: value })
    } catch (e) {
      console.error('Feedback Error:', e)
    }
  }
}

// 💬 Feedback — just open the comment box (no vote yet).
const toggle = () => {
  state.open = !state.open
}

// Send the written feedback.
const sendFeedback = async () => {
  if (state.sending) return
  state.sending = true
  try {
    // NOTE: the field MUST be named `message` — the Apps Script writes data.message to Column F.
    await post({ vote: state.vote || 'comment', message: state.comment })
    state.done = true
  } catch (e) {
    console.error('Feedback Error:', e)
  } finally {
    state.sending = false
  }
}
</script>

<template>
  <div class="feedback-wrapper">
    <div class="feedback-card">
      <template v-if="!state.done">
        <p class="feedback-title">Was this page helpful?</p>

        <div class="feedback-buttons">
          <button
            class="fb-btn"
            :class="{ 'is-active': state.vote === 'yes' }"
            @click="vote('yes')"
          >👍 Yes</button>

          <button
            class="fb-btn"
            :class="{ 'is-active': state.vote === 'no' }"
            @click="vote('no')"
          >👎 No</button>

          <button
            class="fb-btn fb-btn-ghost"
            :class="{ 'is-open': state.open }"
            @click="toggle"
          >
            <template v-if="state.open">✕ Close</template>
            <template v-else>💬 Feedback</template>
          </button>
        </div>

        <div v-if="state.open" class="feedback-form">
          <textarea
            v-model="state.comment"
            class="fb-textarea"
            rows="4"
            placeholder="How can we improve this specific page?"
          ></textarea>
          <button
            class="fb-send"
            :disabled="state.sending"
            @click="sendFeedback"
          >Send Feedback</button>
        </div>
      </template>

      <p v-else class="feedback-thankyou">Thanks for your feedback! 💜</p>
    </div>
  </div>
</template>

<style scoped>
.feedback-wrapper {
  /* Rendered inside VPDocFooter (which already has a 64px top margin),
     just above the Previous/Next navigation. */
  margin-bottom: 2rem;
}

.feedback-card {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
}

.feedback-title {
  font-weight: 600;
  font-size: 16px;
  margin: 0 0 1.25rem;
  color: var(--vp-c-text-1);
}

.feedback-buttons {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.fb-btn {
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  padding: 6px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: border-color 0.2s, background-color 0.2s, color 0.2s;
}

.fb-btn:hover {
  border-color: var(--vp-c-brand-1);
}

.fb-btn.is-active {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

/* The Close/Feedback ghost button turns brand-colored while the box is open. */
.fb-btn-ghost.is-open {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.feedback-form {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.fb-textarea {
  width: 100%;
  max-width: 640px;
  min-height: 110px;
  resize: vertical;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 14px;
  font-family: inherit;
  line-height: 1.5;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg);
  box-sizing: border-box;
}

.fb-textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.fb-textarea::placeholder {
  color: var(--vp-c-text-3);
}

.fb-send {
  background-color: var(--vp-c-brand-1);
  color: #fff;
  border: none;
  padding: 8px 22px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, opacity 0.2s;
}

.fb-send:hover {
  background-color: var(--vp-c-brand-2);
}

.fb-send:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.feedback-thankyou {
  font-weight: 600;
  font-size: 16px;
  color: var(--vp-c-brand-1);
  margin: 0;
}
</style>
