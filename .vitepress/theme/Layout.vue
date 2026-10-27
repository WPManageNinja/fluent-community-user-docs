<script setup>
import DefaultTheme from 'vitepress/theme'
import { computed } from 'vue'
import { useData } from 'vitepress'
import HomeAurora from './components/HomeAurora.vue'
import FluentComments from './components/FluentComments.vue'

const { Layout } = DefaultTheme

const { frontmatter, page } = useData()
const isHome = computed(() => frontmatter.value.layout === 'home')
// Comments go on every doc page except the changelog. The home page has no doc footer.
const showComments = computed(() => page.value.relativePath !== 'changelog.md')
</script>

<template>
  <Layout>
    <template #layout-top>
      <HomeAurora v-if="isHome" />
    </template>

    <template #doc-footer-before>
      <FluentComments v-if="showComments" />
    </template>
  </Layout>
</template>
