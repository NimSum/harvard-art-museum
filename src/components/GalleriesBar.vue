<template>
  <aside>
    <nav>
      <ul>
        <li v-for="gallery in galleries" v-bind:key="gallery.galleryid">
          {{ gallery.theme || gallery.name }}
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'GalleriesBar',
  props: ['galleries']
}
</script>

<style lang="scss" scoped>
    aside {
      width: 25%;

      ul {
        margin: 0;
        padding: 10px;

        li {
          list-style-type: none;
          text-align: left;
          padding: 10px;
          margin: 0;
          font-size: 1.2rem;
        }
      }
    }
</style>
