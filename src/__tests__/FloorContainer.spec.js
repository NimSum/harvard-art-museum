import { mount } from '@vue/test-utils';
import FloorContainer from '../components/FloorContainer.vue';
import getAnything from '../utils/apiFetches';
import apiUrls from '../utils/apiUrlGenerator';
import { pg1Floor1, gallery1220 } from '../utils/mockData';

jest.mock('../utils/apiFetches')
getAnything.mockImplementation(() => Promise.resolve(pg1Floor1));

describe('FloorContainer', () => {
  const $route = {
    params: {
      floor_number: 2
    }
  }
  let wrapper;
  beforeEach(() => {
    wrapper = mount(FloorContainer, {
      mocks: {
        $route
      }
    });
  })

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  })

  test('generates initial gallery by invoking getArtObjects', async () => {
    jest.spyOn(wrapper.vm, 'getArtObjects');
    wrapper.vm.generateInitialGallery();
    expect(wrapper.vm.getArtObjects).toHaveBeenCalled();
  })

  test('renders with artObjects', async () => {
    getAnything.mockImplementation(() => Promise.resolve(gallery1220));
    await wrapper.vm.getArtObjects(1220);
    expect(wrapper.element).toMatchSnapshot();
  })
  
  
});