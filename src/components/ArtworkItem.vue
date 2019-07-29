<template>
  <article class="ArtworkItem">
    <div class="image-container">
      <img v-bind:src="this.data.primaryimageurl" alt="">
    </div>
    <div class="details-container">
      <h4>{{ this.data.title }}</h4>
      <p>{{ this.data.labeltext }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ArtworkItem',
  props: ['artwork'],
  data() {
    return {
      people: {},
      colors: [],
      dated: '',
      primaryimageurl: '',
      labeltext: '',
      url: '',
      title: '',
      medium: '',
      culture: ''
    }
  },
  created() {
    const { people, colors, dated, labeltext, primaryimageurl, url, title, medium, culture } = this.$props.artwork;
    this.data = {
      people,
      colors,
      dated,
      labeltext,
      primaryimageurl,
      url,
      title,
      medium,
      culture
    }
  }
}
</script>

<style lang="scss" scoped>
  .ArtworkItem {
    width: 50%;
    display: flex;

    div.image-container {
      flex: 1;
      
      img {
        width: 50%;
      }
    }

    div.details-container {
      flex: 1;
    }
  }
</style>

