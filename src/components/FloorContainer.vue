<template>
  <main>
    <GalleriesBar 
      v-bind:galleries="galleries"
      v-on:get-art="getArtObjects"
    />
    <ArtworkContainer 
      v-bind:artworks="galleryObjects"
    />
  </main>
</template>

<script>
import GalleriesBar from './GalleriesBar';
import ArtworkContainer from './ArtworkContainer';
import getAnything from '../utils/apiFetches';
import apiUrls from '../utils/apiUrlGenerator';

export default {
  name: 'FloorContainer',
  components: {
    GalleriesBar,
    ArtworkContainer
  },
  data() {
    return {
      galleries: [],
      galleryObjects: [],
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
    },
    async getArtObjects(galleryId) {
      try {
        const currGalleryUrl = apiUrls.getGalleryObjects(galleryId);
        const data = await getAnything(currGalleryUrl);
        this.galleryObjects = data.records;
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

