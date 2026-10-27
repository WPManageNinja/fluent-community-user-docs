<script setup>
import { onMounted } from 'vue'
import { useData, useRoute } from 'vitepress'

// --- CONFIGURATION ---
const SITE_ID = 'T2BGgxHnOOAM'
const API_URL = 'https://api.fluentcomments.com'
const EMBED_SRC = `${API_URL}/embed.js`
// ---------------------

const { isDark } = useData()
const route = useRoute()

// Load embed.js once. It defines the <fluent-comments> custom element, which
// upgrades any element already in the DOM and every one added later.
onMounted(() => {
  if (document.querySelector(`script[src="${EMBED_SRC}"]`)) return
  const script = document.createElement('script')
  script.src = EMBED_SRC
  script.async = true
  document.head.appendChild(script)
})
</script>

<template>
  <div class="fluent-comments-wrapper">
    <!-- ClientOnly: the element renders in a shadow root, so there is nothing to SSR.
         page-url is passed explicitly (not read from window.location) so each page keeps
         its own thread across SPA navigation; the element re-mounts when it changes. -->
    <ClientOnly>
      <fluent-comments
        :site-id="SITE_ID"
        :api-url="API_URL"
        :page-url="route.path"
        :theme="isDark ? 'dark' : 'light'"
      ></fluent-comments>
    </ClientOnly>
  </div>
</template>

<style scoped>
.fluent-comments-wrapper {
  /* Rendered inside VPDocFooter (which already has a 64px top margin),
     just above the Previous/Next navigation. */
  margin-bottom: 2rem;
}
</style>
