<template>
  <div class="wrapper">
    <h1 class="glitch" data-text="XPLOIT">XPLOIT</h1>
  </div>
</template>

<style>
@font-face {
  font-family: 'XPLOIT';
  src: url('assets/fonts/sofachrome.woff2') format('woff2'),
  url('assets/fonts/sofachrome.otf') format('otf');
  font-display: swap;
}

html, body {
  margin: 0;
  padding: 0;
  background: #d6d6d6;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #000;
  color: #fff;
  font: normal 100 24px/28px XPLOIT;
}

.glitch {
  color: white;
  font-size: 65px;
  position: relative;
  width: 430px;
  margin: 0 auto;
}

@media screen and (max-width: 1000px){
  .glitch {
    font-size: 40px;
    width: 265px;
  }
}

@keyframes noise-anim {
  0% {
    clip: rect(55px, 9999px, 94px, 0);
  }
  5% {
    clip: rect(93px, 9999px, 60px, 0);
  }
  10% {
    clip: rect(98px, 9999px, 8px, 0);
  }
  15% {
    clip: rect(70px, 9999px, 22px, 0);
  }
  20% {
    clip: rect(41px, 9999px, 97px, 0);
  }
  25% {
    clip: rect(40px, 9999px, 71px, 0);
  }
  30% {
    clip: rect(62px, 9999px, 20px, 0);
  }
  35% {
    clip: rect(81px, 9999px, 62px, 0);
  }
  40% {
    clip: rect(70px, 9999px, 60px, 0);
  }
  45% {
    clip: rect(15px, 9999px, 29px, 0);
  }
  50% {
    clip: rect(30px, 9999px, 24px, 0);
  }
  55% {
    clip: rect(42px, 9999px, 76px, 0);
  }
  60% {
    clip: rect(53px, 9999px, 27px, 0);
  }
  65% {
    clip: rect(47px, 9999px, 98px, 0);
  }
  70% {
    clip: rect(48px, 9999px, 22px, 0);
  }
  75% {
    clip: rect(87px, 9999px, 47px, 0);
  }
  80% {
    clip: rect(75px, 9999px, 55px, 0);
  }
  85% {
    clip: rect(89px, 9999px, 91px, 0);
  }
  90% {
    clip: rect(21px, 9999px, 54px, 0);
  }
  95% {
    clip: rect(83px, 9999px, 15px, 0);
  }
  100% {
    clip: rect(84px, 9999px, 49px, 0);
  }
}
.glitch:after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -1px 0 red;
  top: 0;
  color: white;
  background: black;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim-2 {
  0% {
    clip: rect(78px, 9999px, 76px, 0);
  }
  5% {
    clip: rect(98px, 9999px, 3px, 0);
  }
  10% {
    clip: rect(65px, 9999px, 20px, 0);
  }
  15% {
    clip: rect(66px, 9999px, 35px, 0);
  }
  20% {
    clip: rect(94px, 9999px, 80px, 0);
  }
  25% {
    clip: rect(27px, 9999px, 77px, 0);
  }
  30% {
    clip: rect(96px, 9999px, 31px, 0);
  }
  35% {
    clip: rect(96px, 9999px, 18px, 0);
  }
  40% {
    clip: rect(35px, 9999px, 43px, 0);
  }
  45% {
    clip: rect(81px, 9999px, 51px, 0);
  }
  50% {
    clip: rect(33px, 9999px, 11px, 0);
  }
  55% {
    clip: rect(77px, 9999px, 75px, 0);
  }
  60% {
    clip: rect(55px, 9999px, 52px, 0);
  }
  65% {
    clip: rect(85px, 9999px, 12px, 0);
  }
  70% {
    clip: rect(36px, 9999px, 64px, 0);
  }
  75% {
    clip: rect(87px, 9999px, 99px, 0);
  }
  80% {
    clip: rect(70px, 9999px, 22px, 0);
  }
  85% {
    clip: rect(79px, 9999px, 56px, 0);
  }
  90% {
    clip: rect(1px, 9999px, 15px, 0);
  }
  95% {
    clip: rect(25px, 9999px, 28px, 0);
  }
  100% {
    clip: rect(1px, 9999px, 60px, 0);
  }
}
.glitch:before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: 1px 0 blue;
  top: 0;
  color: white;
  background: black;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim-2 1s infinite linear alternate-reverse;
}
</style>

<script setup lang="ts">
</script>
