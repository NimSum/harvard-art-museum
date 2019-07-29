<template>
  <article class="ArtworkItem">
    <div>
      image goes here
    </div>
    <div>
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
      url: ''
    }
  },
  created() {
    const { people, colors, dated, labeltext, primaryimageurl, url, title } = this.$props.artwork;
    this.data = {
      people,
      colors,
      dated,
      labeltext,
      primaryimageurl,
      url
    }
  }
}
</script>

<style lang="scss" scoped>
  .ArtworkItem {
    width: 50%;
  }
</style>

