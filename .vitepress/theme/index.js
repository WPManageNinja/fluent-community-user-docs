import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Layout from './Layout.vue' // Import new layout file
import VideoEmbed from './components/VideoEmbed.vue' // Import the YouTube embed component
import ZoomableImage from './components/ZoomableImage.vue' // Click-to-zoom wrapper for markdown images

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('VideoEmbed', VideoEmbed)
    // Registered globally so the markdown `image` renderer can emit <ZoomableImage>.
    // The guard avoids a duplicate-registration warning if enhanceApp runs twice (HMR).
    if (!app.component('ZoomableImage')) {
      app.component('ZoomableImage', ZoomableImage)
    }

    // Mobile search fix. VitePress binds the local-search box with `v-model`, which
    // ignores input while an IME composition is active. Android keyboards (Gboard,
    // Samsung, SwiftKey) keep the current word "composing" until space/suggestion,
    // so search showed no results while typing on phones. This capture listener
    // runs before Vue's own handler and clears its `composing` flag so every
    // keystroke updates the query.
    if (typeof window !== 'undefined' && !window.__fcSearchImeFix) {
      window.__fcSearchImeFix = true
      document.addEventListener(
        'input',
        (e) => {
          const el = e.target
          if (el && el.composing && el.closest && el.closest('.VPLocalSearchBox')) {
            el.composing = false
          }
        },
        true
      )
    }
  }
}
