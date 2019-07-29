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
    this.getGalleries(floor_number).then(res => {
      if (res) this.generateInitialGallery();
    });
  },
  watch: {
    $route (to, from){
      const { floor_number } = to.params;
      const { floor_number: old_floor } = from.params;
      if (floor_number !== old_floor) {
        this.getGalleries(floor_number).then(res => {
          if (res) this.generateInitialGallery();
        });
      }
    }
  },
  methods: {
    async getGalleries(floor_number) {
      try {
        const currFloorUrl = apiUrls.galleriesByFloor(floor_number);
        const data = await getAnything(currFloorUrl);
        this.galleries = data.records;
        return true;
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
    },
    generateInitialGallery() {
      const randomGalleryId = Math.floor(Math.random() * (this.galleries.length - 1 - 0 + 1)) + 0;
      const selectedGallery = this.galleries[randomGalleryId].galleryid;
      this.getArtObjects(selectedGallery);
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

