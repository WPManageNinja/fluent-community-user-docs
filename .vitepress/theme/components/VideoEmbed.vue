<template>
  <figure class="video-embed">
    <div class="video-embed__frame">
      <iframe
        :src="src"
        :title="title || 'FluentCommunity video'"
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <figcaption v-if="title" class="video-embed__caption">
      <a :href="watchUrl" target="_blank" rel="noopener noreferrer">{{ title }}</a>
    </figcaption>
  </figure>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // A YouTube video ID, e.g. "NVYoq0Q5W4E"
  id: { type: String, default: '' },
  // A YouTube playlist ID, e.g. "PLSrsnN1BlMH8". Takes precedence over `id`.
  list: { type: String, default: '' },
  // Caption text, also used as the iframe's accessible title.
  title: { type: String, default: '' }
})

// youtube-nocookie.com so embeds don't set tracking cookies on doc readers.
const src = computed(() =>
  props.list
    ? `https://www.youtube-nocookie.com/embed/videoseries?list=${props.list}`
    : `https://www.youtube-nocookie.com/embed/${props.id}`
)

const watchUrl = computed(() =>
  props.list
    ? `https://www.youtube.com/playlist?list=${props.list}`
    : `https://www.youtube.com/watch?v=${props.id}`
)
</script>

<style scoped>
.video-embed {
  margin: 24px 0;
}

.video-embed__frame {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.video-embed__frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.video-embed__caption {
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.video-embed__caption a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid var(--vp-c-divider);
  transition: color 0.2s ease, border-color 0.2s ease;
}

.video-embed__caption a:hover {
  color: var(--vp-c-brand-1);
  border-bottom-color: var(--vp-c-brand-1);
}
</style>
