<script setup>
useHead({
  titleTemplate: (title) => (title ? `${title} | XPLOIT Ltd.` : 'XPLOIT Ltd.'),
  meta: [
    { name: 'author', content: 'Andrey (Ravy) Rovnyi' }
  ]
});
</script>

<template>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>
