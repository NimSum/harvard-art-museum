const apiUrls = {
  galleriesByFloor: (floor) => `https://api.harvardartmuseums.org/gallery?floor=${floor}&hasimage=1&apikey=${process.env.VUE_APP_API_KEY}&size=15&fields=galleryid,name,theme,objectcount,labeltext`,
  getGalleryObjects: (galleryId) => `https://api.harvardartmuseums.org/object?apikey=${process.env.VUE_APP_API_KEY}&sort=random&gallery=${galleryId}`,
  randomImages: (randomStart) => `https://api.harvardartmuseums.org/image?apikey=${process.env.VUE_APP_API_KEY}&size=21&sort=random&page=${randomStart}` 
}

export default apiUrls;