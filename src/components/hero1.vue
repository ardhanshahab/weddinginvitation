<template>
    <div class="bgded overlay">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <div id="pageintro" class="hoc clear"> 
                <h1 class="heading">Wedding Invitation</h1>
                <p style="font-size: 30px;">*********</p>
                <flip-countdown style="padding:10px" deadline="2023-12-25 00:00:00"></flip-countdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown'
export default {
  name: 'heroSatu',
  components: {
    FlipCountdown
  },
  data () {
    return {
    };
  },
}
</script>

<style scoped>

body {
}

/* .bground {
    color: aliceblue;
    background-color: #65647C;
} */
</style>