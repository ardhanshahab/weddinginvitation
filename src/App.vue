<template>
  <div id="app">
    <hero1Vue/>
    <hero5Vue/>
    <hero2Vue/>
    <hero3Vue/>
    <hero4Vue/>
    <footerVue/>
    <audio hidden autoplay loop src="@/audio/lagu.mp3" type="audio/mpeg">
    <!-- <source src="@/audio/lagu.mp3" type="audio/mpeg"> -->
    <!-- Browsermu tidak mendukung tag audio, upgrade donk! -->
    </audio>
  </div>
</template>

<script>
import hero1Vue from './components/hero1.vue';
import hero2Vue from './components/hero2.vue';
import hero3Vue from './components/hero3.vue';
import hero4Vue from './components/hero4.vue';
import hero5Vue from './components/hero5.vue';
import footerVue from './components/footer.vue';
export default {
  name: 'App',
  components: {
    hero1Vue,
    hero2Vue,
    hero3Vue,
    hero4Vue,
    hero5Vue,
    footerVue
  },
  // mounted() {    
  //   var audio = new Audio('@/audio/lagu.mp3');
  //   audio.play();
  // },
 
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
