<template>
  <article class="ArtworkItem">
    <div class="image-container">
      <img v-bind:src="primaryimageurl" alt="">
      <h4>{{ title }}</h4>
      <button @click="this.showMoreInfo" type="button">More Details</button>
    </div>
    <div v-show="showDetails" class="details-container">
      <p>hihihi</p>
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
      culture,
      showDetails: false
    }
  },
  methods: {
    showMoreInfo() {
      this.showDetails = !this.showDetails;
    }
  }
}
</script>

<style lang="scss" scoped>
  .ArtworkItem {
    width: 85%;
    margin: auto;
    margin-bottom: 10%;
    display: flex;
    flex-direction: column;

    div.image-container {  
      background-color: #EAEAEA;

      img {
        width: 100%;
        max-height: 90vh;
        object-fit: scale-down;
      }

      h4 {
        margin: 0;
        padding: 10px 0;
        color: #252A34;
        font-size: 1.3rem;
        font-weight: 400;
      }
    }

    div.details-container {
      p {
        text-align: left;
        text-indent: 45px;
      }
    }
  }
</style>

