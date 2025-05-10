<template>
  <div class="container">
    <h1>Dusty Cassette</h1>

    <NuxtImg src="/icon/dusty_cassette_logo.webp" alt="Dusty Cassette" width="100" height="100" />

    <h2>Listen us:</h2>

    <MusicLinks :links="links" />

    <p>
      Dusty Cassette is an indie band born in the rainy streets of Portland, Oregon, in 2023, a city where music lingers in coffee shops and back-alley record stores. Formed by lifelong friends Eli Turner (vocals/guitar), Maya Rhodes (keyboard/backing vocals), and Jude Alvarez (bass/percussion), the trio bonded over a shared love for vintage sounds, analog recordings, and the imperfect beauty of lo-fi music.
    </p>
    <p>
      Their name, Dusty Cassette, came from a late-night recording session in Eli’s garage-turned-studio, where they stumbled across a box of old cassettes. The crackle of tape hiss and muffled recordings reminded them why music feels more alive when it’s raw and unpolished.
    </p>
    <p>
      Blending mellow guitar riffs, warm synths, and soulful lyrics, their sound carries a mix of nostalgia and modern indie spirit. Tracks like “Attic Daydreams” and “Rain on Repeat” (teased at local open mics) have already begun to turn heads. With plans for their official debut EP, Dusty Cassette promises music that feels like “a long drive with no destination, a sunset you don’t want to end.
    </p>
    <p>
      Their story isn’t about fame—it’s about sharing moments that feel honest, imperfect, and timeless.
    </p>
    <p>
      Motto: “Old sounds, new stories.”
    </p>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    title: 'Spotify',
    type: 'spotify',
    href: 'https://open.spotify.com/artist/5dOe8WyoriuxcIEbWhMz7i'
  },
  {
    title: 'Apple Music',
    type: 'apple',
    href: 'https://music.apple.com/us/artist/dusty-cassette/1787649729'
  },
  {
    title: 'Deezer',
    type: 'deezer',
    href: 'https://www.deezer.com/ru/artist/295848841'
  },
  {
    title: 'YouTube',
    type: 'youtube',
    href: 'https://www.youtube.com/@dusty_cassette_official'
  },
  {
    title: 'Instagram',
    type: 'instagram',
    href: 'https://www.instagram.com/dustycassette_official'
  },
]

useHead({
  title: 'Dusty Cassette',
  meta: [
    {
      name: 'description',
      content: 'Portland trio Dusty Cassette spins warm lo‑fi guitar‑synth indie that feels like a sunset drive.'
    },
    { name: 'keywords', content: 'xploit, music, zynthar' }
  ]
})
</script>
