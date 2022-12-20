<template>
  <div id="app">
    <audio autoplay loop >
    <source src="@/audio/lagu.mp3" type="audio/mpeg">
    <!-- Browsermu tidak mendukung tag audio, upgrade donk! -->
    </audio>
    <!-- <audio src="@/audio/lagu.mp3" id="my_audio" loop="loop" autoplay="autoplay"></audio> -->
    <!-- <audio ref="audio" src="@/audio/lagu.mp3" typ="audio/mpeg"></audio> -->
    <b-embed type="audio" hidden autoplay>
    <source src="@/audio/lagu.mp3" type="audio/mpeg">
    
  </b-embed>
    <hero1Vue/>
    <hero5Vue/>
    <hero2Vue/>
    <hero3Vue/>
    <hero4Vue/>
    <footerVue/>
    
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
  methods: {
      lagu(){
        this.$refs.audio.play()
      }
  },
  mounted() {    
    if(window.onload){
      this.lagu()

    }
    // var audio = new Audio('@/audio/lagu.mp3');
    // window.onload();
    // audio.play();
  },
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  /* margin-top: 60px; */
}
</style>
