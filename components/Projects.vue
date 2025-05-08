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
        <ProjectItem :data="data.zynthar" />
      </div>
    </div>

    <div class="semi_area">
      <div class="secondary">
        <ProjectItem :data="data.diva_rogue" />
      </div>
      <div class="secondary">
        <ProjectItem :data="data.dusty_cassette" />
      </div>
    </div>

    <div class="main">
      <ProjectItem :data="data.secret" />
    </div>
  </div>
</template>

<script setup lang="ts">
const data = {
  idled: {
    id: 'idled',
    link: 'https://t.me/idled_bot/game',
    icon: '/project/idled_logo.webp',
    title: 'IDLED Survival',
    description: 'A idle-clicker HTML5 Telegram game about the confrontation between humans and cute monsters.',
  },
  tbhc: {
    id: 'tbhc',
    link: 'https://tinyboohomecoming.com',
    icon: '/project/tbhc_logo.webp',
    title: 'Tiny Boo: Homecong',
    description: 'A mobile game for iOS and Android about a little Boo who is trying to find his way home.',
  },
  secret: {
    id: 'secret',
    icon: '/project/secret_logo.webp',
    title: 'Secret Project',
    description: 'A secret project? which is under active development! The announcement will be in the 2st quarter of 2025.',
  },
  secret_game: {
    id: 'secret',
    icon: '/project/secret_logo.webp',
    title: 'Secret Game',
    description: 'WOW! The game? which is under active development! The announcement will be in the 3st quarter of 2025.',
  },
  zynthar: {
    id: 'zynthar',
    link: 'https://zynthar.rocks',
    icon: '/project/zynthar_logo.webp',
    title: 'ZYNTHAR',
    description: 'Post-hardcore from Los Angeles. Loud, emotional, and brutally honest',
  },
  diva_rogue: {
    id: 'diva_rogue',
    link: 'https://divarogue.com',
    icon: '/project/diva_rogue_logo.webp',
    title: 'Diva Rogue',
    description: 'Fierce sound, raw emotion, and unapologetic artistry that dares to break every rule',
  },
  dusty_cassette: {
    id: 'dusty_cassette',
    link: '/project/dusty_cassette',
    icon: '/project/dusty_cassette_logo.webp',
    title: 'Dusty Cassette',
    description: 'Portland trio Dusty Cassette spins warm lo‑fi guitar‑synth indie that feels like a sunset drive.',
  }
}
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
