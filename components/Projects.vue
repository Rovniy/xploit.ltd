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
        <ProjectItem :data="data.secret" />
      </div>
    </div>

    <div class="main">
      <ProjectItem :data="data.secret_game" />
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
    link: '/project/zynthar',
    icon: '/project/zynthar_logo.webp',
    title: 'ZYNTHAR',
    description: 'Zynthar is a musical force where chaos meets melody, and emotions turn into sound.',
  },
  diva_rogue: {
    id: 'diva_rogue',
    link: '/project/diva_rogue',
    icon: '/project/diva_rogue_logo.webp',
    title: 'Diva Rogue',
    description: 'Diva Rogue is the raw, unapologetic voice of Brooklyn—a solo artist blending the grit of rap, the soul of R&B, and the power of pop into a fearless, electrifying sound.',
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
