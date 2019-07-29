<template>
  <aside>
    <nav>
      <h2>Galleries : Floor {{ $route.params.floor_number }}</h2>
      <ul>
        <li 
          v-for="gallery in galleries" 
          v-bind:key="gallery.galleryid"
          @click="$emit('get-art', gallery.galleryid)"
        >
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
      width: 22%;
      background-color: #E3FDFD;
      height: 100%;
      overflow: scroll;  
      h2 {
        margin: 0;
        padding: 15px 0;
        color: #FF2E63;
      }

      ul {
        margin: 0;
        padding: 10px;

        li {
          list-style-type: none;
          text-align: left;
          padding: 10px;
          margin: 0;
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
