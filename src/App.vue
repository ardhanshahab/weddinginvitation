<template>
  <div id="app">
    <hero1Vue/>
    <hero2Vue/>
    <audio hidden autoplay loop>
    <source src="@/audio/lagu.mp3" type="audio/mpeg">
    Browsermu tidak mendukung tag audio, upgrade donk!
    </audio>
  </div>
</template>

<script>
import hero1Vue from './components/hero1.vue';
import hero2Vue from './components/hero2.vue';
export default {
  name: 'App',
  components: {
    hero1Vue,
    hero2Vue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
