<template>
  <main>
    <h2>Floor{{ this.currFloor }}</h2>
  </main>
</template>

<script>
import GalleriesBar from './GalleriesBar';

export default {
  name: 'FloorContainer',
  components: {
    GalleriesBar
  },
  data() {
    return {
      galleries: [],
      currFloor: this.$route.params.floor_number
    }
  },
  async created() {
    try {
      const apiKey = process.env.VUE_APP_API_KEY;
      
    } catch(error) {
      console.log(error); 
    }
  },
  watch:{
    $route (to, from){
      const { floor_number } = to.params;
      this.currFloor = floor_number;
    }
  } 
}
</script>

<style>

</style>
