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
      background-color: #E3FDFD;
      height: 100%;

      ul {
        margin: 0;
        padding: 10px;

        li {
          list-style-type: none;
          text-align: left;
          padding: 10px;
          margin: 0;
          font-size: 1.2rem;
          font-weight: bolder;

          &:hover {
            background-color: #FF2E63;
            color: #E3FDFD;
            cursor: pointer;
          }
        }
      }
    }
</style>
