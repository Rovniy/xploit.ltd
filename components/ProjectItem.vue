<script setup lang="ts">
interface IData {
  id: string
  link?: string
  icon: string
  title: string
  description: string
}
interface IProps {
  data: IData|null
}
const props = withDefaults(defineProps<IProps>(), {
  data: null
})

const id = computed(() => props.data?.id)
const icon = computed(() => props.data?.icon)
const link = computed(() => props.data?.link || '')
const title = computed(() => props.data?.title)
const description = computed(() => props.data?.description)
</script>

<template>
  <NuxtLink :to="link" :class="[ 'project', id ]">
    <div class="block">
      <NuxtImg :src="icon" alt="logo" class="logo" />
      <h2 class="title" v-text="title" />
      <p class="description" v-text="description" />
    </div>

    <NuxtImg v-if="data?.id === 'idled'" src="/project/idled_mascote.webp" class="mascote_idled" />
    <NuxtImg v-if="data?.id === 'idled'" src="/project/idled_mascote_mobile.webp" class="mascote_idled_mobile" />
    <NuxtImg v-if="data?.id === 'tbhc'" src="/project/tbhc_mascote.webp" class="mascote_tbhc" />
    <NuxtImg v-if="data?.id === 'tbhc'" src="/project/tbhc_mascote_mobile.webp" class="mascote_tbhc_mobile" />
  </NuxtLink>
</template>

<style scoped lang="sass">
.project
  height: 100%
  width: 100%
  background-repeat: no-repeat
  background-size: cover
  background-position: center center
  display: flex
  align-items: center
  justify-content: flex-start
  padding: 20px
  position: relative
  transition: filter .2s ease-in-out
  text-decoration: none
  +desktop
    padding: 40px
    background-position: 100% 100%

  &.idled
    background-image: url('~/assets/images/project/idled_bg.webp')
  &.tbhc
    background-image: url('~/assets/images/project/tbhc_bg.webp')
  &.secret
    background-image: url('~/assets/images/project/secret_bg.webp')
  &.zynthar
    background-image: url('~/assets/images/project/zynthar_bg.webp')
  &.diva_rogue
    background-image: url('~/assets/images/project/diva_rogue_bg.webp')
  &.dusty_cassette
    background-image: url('~/assets/images/project/dusty_cassette_bg.webp')

  .block
    width: 100%
    backdrop-filter: blur(10px)
    border-radius: 20px
    padding: 20px
    display: flex
    flex-direction: column
    align-items: center
    justify-content: flex-start
    gap: 10px
    background-color: rgba(#000, .2)
    +desktop
      width: 370px
      align-items: flex-start
      justify-content: flex-start

    .logo
      width: 100px
      height: 100px

    .title
      font: 600 28px/34px var(--main-font)
      color: var(--uicolor-white)
      padding: 10px
      background: var(--uicolor-orange)
      border-radius: 10px
      margin: 0
      text-align: center
      text-decoration: none

    .description
      font: 500 16px/22px var(--main-font)
      color: var(--uicolor-white)
      padding: 0
      margin: 0
      text-align: center
      text-decoration: none
      +desktop
        text-align: left

  .mascote_idled
    position: absolute
    top: 0
    left: 0
    width: 150px
    height: 150px
    display: none
    +desktop
      display: block
      width: 300px
      height: 300px

  .mascote_idled_mobile
    display: block
    position: absolute
    top: 0
    right: 0
    width: 140px
    +desktop
      display: none

  .mascote_tbhc
    position: absolute
    bottom: 0
    right: 0
    transform: rotateY(180deg)
    width: 360px
    display: none
    +desktop
      display: block
      width: 300px
    +desktop-xl
      width: 360px

  .mascote_tbhc_mobile
    position: absolute
    top: 0
    right: 0
    width: 100px
    +mobile_xl
      width: 160px
    +desktop
      display: none

  &:hover
    filter: brightness(1.3)
    text-decoration: none

</style>
