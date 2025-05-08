<template>
  <div class="btn_area">
    <NuxtLink :class="['link_btn', item.type ]"
              v-for="item in links"
              :key="item.type"
              rel="noreferrer"
              :href="item.href"
              target="_blank">
      <NuxtImg :src="`/logo/${item.type}.svg`"
               width="30" height="30"
               :alt="item.type"
               class="icon" />

        <span class="text" v-text="item.title"/>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
type TLink = {
  title: string
  type: string
  href: string
}

interface IProps {
  links: TLink[]
}

withDefaults(defineProps<IProps>(), {
  links: () => []
})
</script>

<style scoped lang="sass">
.btn_area
  +flex_center_column
  gap: 40px
  margin: 40px 0

  .link_btn
    +flex_center_start
    gap: 10px
    text-decoration: none
    color: var(--uicolor-white)

    .icon
      $size: 30px

      width: $size
      height: $size

    .text
      font: 500 20px/24px var(--main-font)

    &:hover
      color: var(--uicolor-orange)

</style>
