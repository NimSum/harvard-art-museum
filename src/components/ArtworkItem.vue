<template>
  <article class="ArtworkItem">
    <div class="image-container">
      <img v-bind:src="primaryimageurl" alt="">
      <h4>{{ title }}</h4>
    </div>
    <div class="details-container">
      <p>{{ labeltext }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ArtworkItem',
  props: ['artwork'],
  data() {
    const { people, colors, dated, labeltext, primaryimageurl, url, title, medium, culture } = this.$props.artwork;
    return {
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

