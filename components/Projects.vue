<template>
  <main class="projects">
    <div class="main">
      <ProjectItem :data="projects.diva_rogue" preload />
    </div>

    <div class="main">
      <ProjectItem :data="projects.tbhc" preload />
    </div>

    <div class="main">
      <ProjectItem :data="projects.zynthar" preload  />
    </div>

    <div class="main">
      <ProjectItem :data="projects.idled" />
    </div>

    <div class="main">
      <ProjectItem :data="projects.elo_pub" />
    </div>

    <div class="semi_area">
      <div class="secondary">
        <ProjectItem :data="projects.dusty_cassette"/>
      </div>

      <div class="secondary">
        <ProjectItem :data="projects.secret" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { projects } from '~/config'
</script>

<style scoped lang="sass">
$gap: 0px

.projects
  width: 100%
  display: flex
  flex-direction: column
  flex-wrap: wrap
  gap: $gap
  +desktop
    flex-direction: row
    //height: calc(80vh - var(--header_height))
    //min-height: 800px

  .main
    width: calc(100% - #{$gap})
    height: 400px
    +desktop
      width: calc(50% - #{$gap})
      height: 800px

  .semi_area
    display: flex
    flex-direction: column
    width: calc(100% - #{$gap})
    height: 100%
    gap: $gap
    +desktop
      height: 800px
      width: calc(50% - #{$gap})

    .secondary
      width: 100%
      height: 400px
</style>
