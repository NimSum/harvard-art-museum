import getAnything from './index';
import apiUrls from '../apiUrlGenerator';
import * as axios from "axios";

jest.mock("axios");

describe('getAnything', () => {
  const mockUrl = apiUrls.galleriesByFloor(1);
  const mockResponse = {
    statusText: "OK"
  }

  it('should fetch with the correct params', async () => {
    axios.get.mockImplementation(() => Promise.resolve(mockResponse));
    await getAnything(mockUrl);
    expect(axios.get).toHaveBeenCalledWith(mockUrl);
  })
})