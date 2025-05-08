<template>
  <div class="footer">
    <NuxtLink :to="`mailto:${contacts.email}`" class="contacts">
        {{ contacts.email }}
    </NuxtLink>

    <div class="links_area">
      <NuxtLink to="/idled-top10-season-rewards" class="link">IDLED Survival Rewards</NuxtLink>
    </div>

    <span class="copy" v-text="copyright.label" />
  </div>
</template>

<script setup lang="ts">
import { contacts, copyright } from '~/config'
</script>

<style scoped lang="sass">
.footer
  width: 100%
  padding: 40px 20px 20px
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  gap: 20px

  .contacts
    font: 400 16px/16px var(--main-font)
    color: var(--uicolor-gray)
    text-decoration: none

    &:hover
      color: var(--uicolor-white)

  .links_area
    display: flex
    align-items: center
    justify-content: center
    gap: 20px

    .link
      font: 400 14px/20px var(--main-font)
      color: var(--uicolor-gray)

      &:hover
        color: var(--uicolor-white)

  .copy
    font: 400 14px/20px var(--main-font)
    color: var(--uicolor-gray)

</style>
