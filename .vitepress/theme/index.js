import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Feedback from './components/Feedback.vue' // Import the file for feedback widget
import Layout from './Layout.vue' // Import new layout file
import VideoEmbed from './components/VideoEmbed.vue' // Import the YouTube embed component
import ZoomableImage from './components/ZoomableImage.vue' // Click-to-zoom wrapper for markdown images

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Feedback', Feedback)
    app.component('VideoEmbed', VideoEmbed)
    // Registered globally so the markdown `image` renderer can emit <ZoomableImage>.
    // The guard avoids a duplicate-registration warning if enhanceApp runs twice (HMR).
    if (!app.component('ZoomableImage')) {
      app.component('ZoomableImage', ZoomableImage)
    }
  }
}
