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
    this.$data.images = images;
    this.$data.next = result.info.next;
  }
}
</script>

<style lang="scss" scoped>
  .SplashPage {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1% 0;

    img {
      display: inline-block;
      width: 28%;
      margin: auto;
      padding: 20px 0;
    }
    
  }
</style>

