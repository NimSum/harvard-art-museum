<template>
  <main>
    <h2>Floor{{ this.currFloor }}</h2>
  </main>
</template>

<script>
import GalleriesBar from './GalleriesBar';
import getAnything from '../utils/apiFetches';
import apiUrls from '../utils/apiUrlGenerator';

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
      const currFloorUrl = apiUrls.galleriesByFloor(1);
      const data = await getAnything(currFloorUrl);
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
