import { mount } from '@vue/test-utils';
import GalleriesBar from '../components/GalleriesBar.vue';

describe('GalleriesBar', () => {
  const $route = {
    params: {
      floor_number: 1
    }
  }
  
  test('renders correctly', () => {
    const wrapper = mount(GalleriesBar, {
      mocks: {
        $route
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  })
});