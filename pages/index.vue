<template>
  <Projects/>
</template>

<style>

</style>

<script setup lang="ts">
import {meta} from '~/config'

useHead({
  meta: [
    {name: 'description', content: meta.description},
    {name: 'keywords', content: meta.keywords}
  ]
})
</script>
