<template>
  <div id="app">
    <div v-if="isLoading" class="successfully-saved">
      <div class="col-12 col-md-12 col-sm-12" style="background-color: #1C315E; width: auto; height: 100vh; color: white;">
        <p>Tanpa Mengurangi Rasa Hormat blablabla</p>
        <b-button @click="lagu()">cekson</b-button>
      </div>
    </div>
    <div v-if="!isLoading">
    <!-- <vueAudio src="../audio/lagu.mp3"  :autoPlay="autoplay" :loop="loop"/> -->
    <audio id="lagu" autoplay :loop="loop">
      <source src="../src/audio/lagu.mp3" type="audio/mp3"/>
    </audio>
    <hero1Vue/>
    <hero5Vue/>
    <hero2Vue/>
    <hero3Vue/>
    <hero4Vue/>
    <footerVue/>
  </div>
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

    // vueAudio,
    footerVue
  },
  data(){
    return{
      autoplay : true,
      loop : true,
      controls : true,
      isLoading : true,
    }
  },
  methods: {
    lagu(){

      if(this.isLoading){
        this.isLoading = false;
      document.getElementById("lagu").play();
      console.log(this.isLoading)
      }else{
        this.isLoading = true
      }

      // if(this.isLoading == false){
      // document.getElementById("lagu").play();
      // document.getElementById("lagu").autoplay;

  // }
}
  },
  mounted() {    
    // setTimeout(() => {
    //   this.isLoading = false;
    //   this.lagu()
    // }, 3000);

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
.elementToFadeInAndOut {
    opacity: 1;
    animation: opacity 2s linear;
}
.successfully-saved.hide-opacity{
    opacity: 0;
}

.successfully-saved {
    color: #FFFFFF;
    text-align: center;

    -webkit-transition: opacity 3s ease-in-out;
    -moz-transition: opacity 3s ease-in-out;
    -ms-transition: opacity 3s ease-in-out;
    -o-transition: opacity 3s ease-in-out;
     opacity: 1;
}

</style>
