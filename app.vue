<script setup>
useHead({
  titleTemplate: (title) => (title ? `${title} | XPLOIT` : 'XPLOIT'),
  meta: [
    { name: 'author', content: 'Andrey Rovnyi' }
  ]
});
</script>


<template>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>
