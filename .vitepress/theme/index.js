import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Feedback from './components/Feedback.vue' // Import the file for feedback widget
import Layout from './Layout.vue' // Import new layout file
import VideoEmbed from './components/VideoEmbed.vue' // Import the YouTube embed component

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Feedback', Feedback)
    app.component('VideoEmbed', VideoEmbed)
  }
}
