<script setup lang="ts">
const data = {
  idled: {
    id: 'idled',
    link: 'https://t.me/idled_bot/game',
    icon: '/project/idled_logo.webp',
    title: 'IDLED Survival',
    description: 'IDLED Survival is a survival game where you have to survive in a post-apocalyptic world.',
  },
  tbhc: {
    id: 'tbhc',
    link: 'https://tinyboohomecoming.com',
    icon: '/project/tbhc_logo.webp',
    title: 'Tiny Boo: Homecong',
    description: 'Some description here',
  },
  secret: {
    id: 'secret',
    icon: '/project/secret_logo.webp',
    title: 'Sercet Project',
    description: 'Some description here',
  }
}
</script>

<template>
  <div class="projects">
    <div class="main">
      <ProjectItem :data="data.idled" />
    </div>
    <div class="semi_area">
      <div class="secondary">
        <ProjectItem :data="data.tbhc" />
      </div>
      <div class="secondary">
        <ProjectItem :data="data.secret" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.projects
  width: 100%
  display: flex
  flex-direction: column
  flex-wrap: wrap
  gap: 0
  +desktop
    flex-direction: row
    height: calc(80vh - var(--header_height))
    min-height: 800px

  .main
    width: 100%
    flex-grow: 1
    height: 400px
    +desktop
      width: 50%
      height: 100%

  .semi_area
    display: flex
    flex-direction: column
    gap: 0
    width: 100%
    height: 100%
    flex-grow: 1
    +desktop
      width: 50%

    .secondary
      width: 100%
      height: 400px
      +desktop
        height: 50%
</style>
