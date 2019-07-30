<template>
  <aside>
    <nav>
      <h2>Galleries : Floor {{ $route.params.floor_number }}</h2>
      <ul>
        <li 
          v-for="gallery in galleries" 
          v-bind:key="gallery.galleryid"
          v-bind:class="{ hasVisited : visited.includes(gallery.galleryid), active : activeGallery === gallery.galleryid }"
          @click="handleClick(gallery.galleryid)"
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
  props: ['galleries'],
  data() {
    return {
      visited: [],
      activeGallery: 0
    }
  },
  methods: {
    setVisited(galleryid) {
      this.$data.visited.push(galleryid);
      this.calculateLast();
    },
    handleClick(galleryid) {
      this.$emit('get-art', galleryid);
      this.setVisited(galleryid);
    },
    calculateLast() {
      const { visited } = this.$data;
      const lastVal = visited[visited.length - 1];
      this.$data.activeGallery = lastVal;
    }
  }
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

        .hasVisited {
          background-color: #CBF1F5;
          color: #08D9D6;
        }

        .active {
          background-color: #FF2E63;
          color: #E3FDFD;
        }
      }
    }
</style>
