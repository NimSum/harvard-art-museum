<template>
  <main>
    <GalleriesBar 
      v-bind:galleries="galleries" 
      v-bind:floor="currFloor" 
    />
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
  created() {
    this.getGalleries();
  },
  updated() {
    this.getGalleries();
  },
  watch:{
    $route (to){
      const { floor_number } = to.params;
      this.currFloor = floor_number;
    }
  },
  methods: {
    async getGalleries() {
      try {
        const currFloorUrl = apiUrls.galleriesByFloor(this.currFloor);
        const data = await getAnything(currFloorUrl);
        this.galleries = data.records;
      } catch(error) {
        throw error;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  main {
    height: 100%;
  }
</style>

