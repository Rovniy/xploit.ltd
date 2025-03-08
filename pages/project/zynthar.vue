<template>
  <div class="container">
    <h1>ZYNTHAR</h1>

    <img src="~/assets/images/project/zynthar_logo.webp" alt="Zynthar">

    <h2>Listen us:</h2>

    <MusicLinks :links="links" />

    <p>
      Zynthar emerged in the neon-lit streets of Los Angeles in 2024, a city where dreams collide with reality and the air buzzes with ambition. The group was founded by enigmatic frontman Kai Vega (vocals/screams), drummer and producer Dax Cole, and guitarist/lyricist Ivy Hart. Their story began in a dimly lit rehearsal studio on the outskirts of the city, where they first combined their eclectic influences and unrelenting passion for music that doesn’t just play—it confronts.
    </p>
    <p>
      The name Zynthar was born during a late-night jam session, as they stumbled across an old sci-fi paperback in the cluttered studio. The book told of a mythical dimension called "Zynthar," where chaos and harmony coexist, mirroring the raw power and fragile beauty they sought to capture in their music. Drawing inspiration from post-hardcore’s intensity, metalcore’s aggression, and rap-rock’s edge, Zynthar’s sound is both cinematic and cathartic. Their songs are journeys, starting with long, atmospheric intros that erupt into dynamic transitions, from ferocious screams to haunting melodies. Tracks like “Crimson Divide” and “Rift Ascension” are already stirring curiosity at underground shows, where fans describe their performances as “like being caught in a storm you don’t want to escape.”
    </p>
    <p>
      Zynthar’s ethos is rooted in raw emotion, dramatic storytelling, and the belief that music should challenge and transform. Their debut album, Echoes of the Rift, dives deep into themes of personal struggle, fractured relationships, and redemption. Each song feels like a chapter in a cinematic epic, blurring the line between sound and story. Zynthar isn’t here for fleeting fame; they’re here to create a space where intensity meets introspection, where chaos becomes art. Motto: “Break the silence, embrace the rift.”
    </p>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    title: 'Spotify',
    type: 'spotify',
    href: 'https://open.spotify.com/artist/3z0vh8xXLIMiRxVUthV08h'
  },
  {
    title: 'Apple Music',
    type: 'apple',
    href: 'https://music.apple.com/us/artist/zynthar/1787947789'
  },
  {
    title: 'Deezer',
    type: 'deezer',
    href: 'https://www.deezer.com/ru/artist/296159441'
  },
  {
    title: 'YouTube',
    type: 'youtube',
    href: 'https://www.youtube.com/@zynthar_official'
  },
  {
    title: 'Instagram',
    type: 'instagram',
    href: 'https://www.instagram.com/zynthar_official'
  },
  {
    title: 'Facebook',
    type: 'facebook',
    href: 'https://www.facebook.com/zynthar.official'
  }
]

useHead({
  title: 'ZYNTHAR',
  meta: [
    {
      name: 'description',
      content: 'Zynthar is a musical force where chaos meets melody, and emotions turn into sound.'
    },
    { name: 'keywords', content: 'xploit, music, zynthar' }
  ]
})
</script>
