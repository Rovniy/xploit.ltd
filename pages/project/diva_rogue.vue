<template>
  <div class="container">
    <h1>Diva Rogue</h1>

    <img src="~/assets/images/project/diva_rogue_logo.webp" alt="Diva Rogue">

    <h2>Listen me:</h2>

    <MusicLinks :links="links" />

    <p>
      Born Samantha Rivera on April 14, 1995, in Bushwick, Brooklyn, Diva Rogue grew up in a small apartment filled with the sounds of salsa, old-school hip-hop, and the hum of city life. Inspired by the streets of New York, she started writing poetry and rhymes at just 12, turning her life experiences into sharp, honest verses. Friends gave her the nickname “Diva” for her confidence and natural stage presence, but when she hit the underground cyphers of Bed-Stuy and Fort Greene, she added “Rogue” to represent her refusal to play by the rules.
    </p>
    <p>
      Now 29, Diva Rogue is preparing to drop her long-awaited debut—a raw, unapologetic project that blends gritty East Coast beats with personal stories of survival, independence, and ambition. She’s already made waves performing at underground shows in Brooklyn and Harlem, earning a reputation for her powerful delivery, poetic lyricism, and ability to command any crowd. Industry whispers are calling her “Brooklyn’s new voice,” and fans eagerly await what’s next.
    </p>
    <p>
      “I’ve been grinding my whole life for this moment. The world ain’t ready for Diva Rogue—but I am.”
    </p>
    <p>
      Motto: “The crown’s mine—I’m just coming to get it.”"
    </p>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    title: 'Spotify',
    type: 'spotify',
    href: 'https://open.spotify.com/artist/2K6A8QQQ7b0xHeNmYpJj5f'
  },
  {
    title: 'Apple Music',
    type: 'apple',
    href: 'https://music.apple.com/us/artist/diva-rogue/1791819506'
  },
  {
    title: 'YouTube',
    type: 'youtube',
    href: 'https://www.youtube.com/@diva_rogue'
  },
  {
    title: 'Instagram',
    type: 'instagram',
    href: 'https://www.instagram.com/diva.rogue'
  },
]

useHead({
  title: 'Diva Rogue',
  meta: [
    {
      name: 'description',
      content: 'Diva Rogue is the raw, unapologetic voice of Brooklyn—a solo artist blending the grit of rap, the soul of R&B, and the power of pop into a fearless, electrifying sound.'
    },
    { name: 'keywords', content: 'xploit, music, diva rogue' }
  ]
})
</script>
