<template>
  <aside>
    <nav>
      <ul v-for="gallery in galleries" v-bind:key="gallery.galleryid">
        <GalleryButton 
        v-bind:theme="gallery.theme" 
        v-bind:id="gallery.galleryid"
        v-bind:name="gallery.name" />
      </ul>
    </nav>
  </aside>
</template>

<script>
import GalleryButton from './GalleryButton'

export default {
  name: 'GalleriesBar',
  components: {
    GalleryButton
  },
  props: ['galleries']
}
</script>

<style lang="sass" scoped>

</style>
