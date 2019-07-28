const apiUrls = {
  galleryByFloor: (floor) => `https://api.harvardartmuseums.org/gallery?floor=${floor}&hasimage=1&api-key=${process.env.VUE_APP_API_KEY}`
}

export default apiUrls;