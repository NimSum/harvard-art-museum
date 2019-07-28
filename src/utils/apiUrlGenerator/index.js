const apiUrls = {
  galleriesByFloor: (floor) => `https://api.harvardartmuseums.org/gallery?floor=${floor}&hasimage=1&apikey=${process.env.VUE_APP_API_KEY}`
}

export default apiUrls;