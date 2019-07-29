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
      galleryObjects: []
    }
  },
  created() {
    const { floor_number } = this.$route.params
    this.getGalleries(floor_number);
  },
  watch: {
    $route (to, from){
      const { floor_number } = to.params;
      const { floor_number: old_floor } = from.params;
      if (floor_number !== old_floor) {
        this.getGalleries(floor_number);
      }
    }
  },
  methods: {
    async getGalleries(floor_number) {
      try {
        const currFloorUrl = apiUrls.galleriesByFloor(floor_number);
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

<style lang="scss">
  main {
    height: 100%;
    display: flex;
  }
</style>

