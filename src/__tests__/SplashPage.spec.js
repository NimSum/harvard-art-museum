import { mount } from '@vue/test-utils';
import SplashPage from '../components/SplashPage.vue';
import getAnything from '../utils/apiFetches';
import apiUrls from '../utils/apiUrlGenerator';
import { mockImages } from '../utils/mockData';

jest.mock('../utils/apiFetches')
getAnything.mockImplementation(() => Promise.resolve(mockImages));

describe('SplashPage', () => {
  let wrapper;
  const destroySpy = jest.fn();

  beforeEach(() => {
    wrapper = mount(SplashPage);
    jest.spyOn(wrapper.vm, 'addImages');
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
    wrapper.destroy();
  });

  test('adds additional images from event', () => {
    const mockNewImage = {
      records: [
        {
          "id": 12345,
          "baseimageurl": "https://nrs.harvard.edu/urn-3:HUAM:INV028582_dynmc",
        }
      ]
    }
    getAnything.mockImplementation(() => Promise.resolve(mockNewImage));
    wrapper.vm.checkIfBottom();
    expect(wrapper.vm.addImages).toHaveBeenCalled();
  })
});