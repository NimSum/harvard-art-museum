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
      next: '',
      isFetching: false
    }
  },
  created() {
    window.addEventListener('scroll', this.checkIfBottom, false);
    this.addImages();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkIfBottom, false);
  },
  methods: {
    async addImages() {
      this.$data.isFetching = true;
      const randomGalleryId = Math.floor(Math.random() * (18100 - 1 + 1)) + 1;
      const randomImagesUrl = apiUrls.randomImages(randomGalleryId);
      const result = await getAnything(randomImagesUrl);
      const images = result.records.map(record => ({
        url: record.baseimageurl,
        id: record.imageid
      }));
      this.$data.images = [...this.$data.images, ...images];
      if (result.records) this.$data.isFetching = false;
    },
    checkIfBottom() {
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
        if (!this.$data.isFetching) {
          this.addImages();
        }
      }
    }
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
    background: #E3FDFD;
    height: 100%;
    overflow: scroll;

    img {
      display: inline-block;
      width: 27%;
      margin: 6% 2%;
      transition: all 500ms ease-in-out;
      border: 4px solid #eaeaea;

      &:hover {
        transform: scale(1.3);
        border-width: 8px;
        z-index: 2;
        box-shadow: 0px 0px 100px 50px hsla(0, 0%, 0%, .5);
      }
    }
  }
</style>

