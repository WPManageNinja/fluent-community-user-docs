<script setup>
import DefaultTheme from 'vitepress/theme'
import { computed } from 'vue'
import { useData } from 'vitepress'
import HomeAurora from './components/HomeAurora.vue'

const { Layout } = DefaultTheme

const { frontmatter } = useData()
const isHome = computed(() => frontmatter.value.layout === 'home')
</script>

<template>
  <Layout>
    <template #layout-top>
      <HomeAurora v-if="isHome" />
    </template>

    <template #doc-footer-before>
      <Feedback />
    </template>
  </Layout>
</template>
