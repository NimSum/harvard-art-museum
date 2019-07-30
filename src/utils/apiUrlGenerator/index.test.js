import apiUrlGenerator from './index';

describe('apiUrlGenerator', () => {

  it('generate galleries url by floor', () => {
    const url = apiUrlGenerator.galleriesByFloor(1);
    const expected = 'https://api.harvardartmuseums.org/gallery?floor=1&hasimage=1&apikey=undefined&size=24&fields=galleryid,name,theme,objectcount,labeltext'
    expect(url).toEqual(expected)
  })

  it('generate gallery objects url by gallery id', () => {
    const url = apiUrlGenerator.getGalleryObjects(1220);
    const expected = 'https://api.harvardartmuseums.org/object?size=15&apikey=undefined&sort=random&gallery=1220'
    expect(url).toEqual(expected)
  })

  it('generate random images url by random start', () => {
    const url = apiUrlGenerator.randomImages(5923);
    const expected = 'https://api.harvardartmuseums.org/image?apikey=undefined&size=21&sort=random&page=5923'
    expect(url).toEqual(expected)
  })
});