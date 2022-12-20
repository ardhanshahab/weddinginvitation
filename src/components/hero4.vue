<template>
    <div class="wrapper background1 row2">
  <section id="ctdetails" class="hoc container clear"> 
    <!-- ################################################################################################ -->
    <div class="sectiontitle">
      <!-- <p class="nospace font-xs">Enim eleifend dignissim bibendum</p> -->
      <h6 class="heading font-x2">Pesan dan Kesan</h6>
    </div>
    <div class="one_half first">
      <div id="overflow" style="height: 300px; width: auto;">
      <div class="excerpt my-4 mx-2">
            <time datetime="2045-04-03T08:15+00:00">03 Apr 2045</time>
            <p class="heading">Enim odio in odio suspendisse commodo suscipit nisi nam tellus</p>
          </div>
          <div class="excerpt my-4 mx-2">
            <time datetime="2045-04-03T08:15+00:00">03 Apr 2045</time>
            <p class="heading">Enim odio in odio suspendisse commodo suscipit nisi nam tellus</p>
          </div>
          <div class="excerpt my-4 mx-2">
            <time datetime="2045-04-03T08:15+00:00">03 Apr 2045</time>
            <p class="heading">Enim odio in odio suspendisse commodo suscipit nisi nam tellus</p>
          </div>
          <div class="excerpt my-4 mx-2">
            <time datetime="2045-04-03T08:15+00:00">03 Apr 2045</time>
            <p class="heading">Enim odio in odio suspendisse commodo suscipit nisi nam tellus</p>
          </div>
          <div class="excerpt my-4 mx-2">
            <time datetime="2045-04-03T08:15+00:00">03 Apr 2045</time>
            <p class="heading">Enim odio in odio suspendisse commodo suscipit nisi nam tellus</p>
          </div>
          <div class="excerpt my-4 mx-2">
            <time datetime="2045-04-03T08:15+00:00">03 Apr 2045</time>
            <p class="heading">Enim odio in odio suspendisse commodo suscipit nisi nam tellus</p>
          </div>
          <div class="excerpt my-4 mx-2">
            <time datetime="2045-04-03T08:15+00:00">03 Apr 2045</time>
            <p class="heading">Enim odio in odio suspendisse commodo suscipit nisi nam tellus</p>
          </div>
          <div class="excerpt my-4 mx-2">
            <time datetime="2045-04-03T08:15+00:00">03 Apr 2045</time>
            <p class="heading">Enim odio in odio suspendisse commodo suscipit nisi nam tellus</p>
          </div>
        
      </div>
    </div>
    <article class="one_half">
      <h6 class="heading">Buku Tamu</h6>
      <!-- <p class="nospace btmspace-15">Please kindly help us prepare everything better by confirming your attendance to our wedding event with the following RSVP form:</p> -->
      <form action="#" method="post">
        <fieldset>
          <legend>Pesan</legend>
          <input type="text" v-model="name" value="" placeholder="Nama">
          <b-form-textarea
            id="textarea"
            v-model="pesan"
            placeholder="Pesan yang ingin disampaikan..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
          <div class="d-block my-4">
            <p style="margin-left: 1px;">Apakah anda akan hadir?</p>
            <b-form-select v-model="selected" :options="options" style="padding:15px; border: 1px; margin-bottom: 20px; width: auto;"></b-form-select>
          </div>
          <button type="submit" value="submit">Submit</button>
        </fieldset>
      </form>
    </article>
    <!-- ################################################################################################ -->
  </section>
</div>
</template>

<script>
export default {
  name: 'heroEmpat',
  components: {
  },
  data(){
    return{
      name: '',
      pesan: '',
      selected: null,
      options: [
          { value: null, text: 'Pilih' },
          { value: 'a', text: 'Hadir' },
          { value: 'a', text: 'Tidak Hadir' },
    ],
    }
  },
  computed: {
    listPokemon() {
      return this.$store.state.pokemon.list;
    },
    infoPokemon() {
      return this.$store.state.pokemon.info;
    },
  },
  methods: {
    fetchPokemon() {
      this.$store.dispatch("pokemon/fetchList");
    },
  
    redirect(index) {
        this.$router.push('/detailnews/' + index);
    }
    
  },
  mounted() {
    this.fetchPokemon();
  },
}
</script>
<style scoped>
.background1 {
  background-color: wheat;
}
#overflow{
    border: 1px solid #00000038;
    height: 200px;
    width: 500px;
    overflow-x: hidden;
    overflow-y: scroll;
}
#overflow .container div{
    border: 1px solid #CCC;
    float: left;
    width: max-content;
    height: max-content;
}
</style>