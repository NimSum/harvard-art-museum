<template>
  <article class="ArtworkItem">
    <div class="image-container">
      <img v-bind:src="primaryimageurl" alt="">
      <h4>{{ title }}</h4>
      <button @click="this.showMoreInfo" type="button">More Details</button>
    </div>
    <div v-show="showDetails" class="details-container">
      <table>
        <tr>
          <td>Dated:</td>
          <td>{{ dated }}</td>
        </tr>
        <tr>
          <td>Medium: </td>
          <td>{{ medium }}</td>
        </tr>
        <tr>
          <td>Culture: </td>
          <td>{{ culture }}</td>
        </tr>
        <tr>
          <td>Artist/Artists: </td>
          <td 
            v-for="artist in people"
            v-bind:key="artist.id"
            >{{ artist.name }}</td>
        </tr>
      </table>
      <a 
        target="_blank" 
        rel="noopener noreferrer" 
        v-bind:href="url">
        Harvard Museum Details
      </a>
    </div>
    <div v-show="!showDetails" class="details-container">
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
      position: relative;

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

      button {
        position: absolute;
        left: 0;
        bottom: 0;
        border: none;
        background-color: #EAEAEA;
        padding: 5px 10px;
        text-decoration: underline;

        &:hover {
          cursor: pointer;
        }
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

