<template>
  <section class="ArtworkContainer"> 
      <ArtworkItem 
        v-for="artwork in artworks"
        v-bind:key="artwork.objectid"
        v-bind:artwork="artwork" 
      />
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
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    padding: 1%;
    background-color: #E3FDFD;
  }

</style>

