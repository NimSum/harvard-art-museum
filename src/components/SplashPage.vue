<template>
  <section class="SplashPage">
    <img v-for="image in images" v-bind:src="image.url" v-bind:key="image.id" alt="Random Art Photo"/>
  </section>
</template>

<script>
import getAnything from '../utils/apiFetches';
import apiUrls from '../utils/apiUrlGenerator';

export default {
  name: 'SplashPage',
  data() {
    return {
      images: [],
      next: ''
    }
  },
  async created() {
    const randomGalleryId = Math.floor(Math.random() * (18100 - 1 + 1)) + 1;
    const randomImagesUrl = apiUrls.randomImages(randomGalleryId);
    const result = await getAnything(randomImagesUrl);
    const images = result.records.map(record => ({
      url: record.baseimageurl,
      id: record.imageid
    }));
    this.$data.images = [...this.$data.images, ...images];
    this.$data.next = result.info.next;
  }
}
</script>

<style lang="scss" scoped>
  .SplashPage {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1% 0;
    background: #08d9d6;
    height: 100%;
    overflow: scroll;

    img {
      display: inline-block;
      width: 27%;
      margin: 2%;
      transition: all 500ms ease-in-out;

      &:hover {
        width: 33%;
      }
    }
    
  }
</style>

