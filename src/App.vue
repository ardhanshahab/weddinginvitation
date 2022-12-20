<template>
  <div id="app">
    <!-- <vueAudio src="../audio/lagu.mp3"  :autoPlay="autoplay" :loop="loop"/> -->
    <audio id="lagu" :controls="controls" autoplay :loop="loop">
      <source src="../src/audio/lagu.mp3" type="audio/mpeg"/>
    </audio>
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
// import vueAudio from 'vue-audio'
export default {
  name: 'App',
  components: {
    hero1Vue,
    hero2Vue,
    hero3Vue,
    hero4Vue,
    hero5Vue,
    // vueAudio,
    footerVue
  },
  data(){
    return{
      autoplay : true,
      loop : true,
      controls : true
    }
  },
  methods: {
    lagu(){
      if(window.onload){
      document.getElementById("lagu").play();
    }
  }
      
  },
  mounted() {    
    this.lagu()
    // this.autoplay = false;
    // this.controls = true
    // setTimeout(() => {
    //         // this.autoplay = true;
    // this.controls = false
    //               }, 99000);
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
