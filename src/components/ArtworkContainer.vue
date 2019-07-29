<template>
  <section class="ArtworkContainer">
    <div
      v-for="artwork in artworks"
      v-bind:key="artwork.objectid"
    > 
      <ArtworkItem v-bind:artwork="artwork" />
    </div>
  </section>
</template>

<script>
import ArtworkItem from './ArtworkItem';

export default {
  name: 'ArtworkContainer',
  props: ['artworks'],
  components: {
    ArtworkItem
  }
}
</script>

<style lang="scss" scoped>
  .ArtworkContainer {
    width: 80%;
  }

</style>

