<template>
  <article>
    <h2>Work</h2>
  </article>
</template>

<script>
export default {
  name: 'ArtworkItem',
  props: ['artwork'],
  data() {
    return {
      images: []
    }
  },
  created() {
    const { people, colors, dated, labeltext, primaryimageurl, url } = this.$props.artwork;
    console.log(dated)
  }
}
</script>

<style>

</style>
