import { mount } from '@vue/test-utils';
import FloorContainer from '../components/FloorContainer.vue';
import getAnything from '../utils/apiFetches';
import apiUrls from '../utils/apiUrlGenerator';
import { pg1Floor1 } from '../utils/mockData';

jest.mock('../utils/apiFetches')
getAnything.mockImplementation(() => Promise.resolve(pg1Floor1));

describe('FloorContainer', () => {
  const $route = {
    params: {
      floor_number: 2
    }
  }
  test('renders correctly', () => {
    const wrapper = mount(FloorContainer, {
      mocks: {
        $route
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  })
});