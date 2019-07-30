import getAnything from './index';
import apiUrls from '../apiUrlGenerator';
import * as axios from "axios";

jest.mock("axios");

describe('getAnything', () => {
  const mockUrl = apiUrls.galleriesByFloor(1);

  it('should return fetched data', async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: ["Fake Data"], statusText: "OK" }));
    const result = await getAnything(mockUrl);
    expect(result).toEqual(["Fake Data"]);
  })

  it('should fetch with the correct params', async () => {
    axios.get.mockImplementation(() => Promise.resolve({ statusText: "OK" }));
    await getAnything(mockUrl);
    expect(axios.get).toHaveBeenCalledWith(mockUrl);
  })

  it('should throw an error if fetch fails', async () => {
    axios.get.mockImplementation(() => Promise.resolve({ statusText: "BAD"}));
    try {
      await getAnything(mockUrl)
    } catch(error) {
      expect(error).toEqual(Error('Failed to fetch data'));
    }
  })
})