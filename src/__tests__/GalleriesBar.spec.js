import { mount } from '@vue/test-utils';
import GalleriesBar from '../components/GalleriesBar.vue';
import { gallery1220 } from '../utils/mockData';

describe('GalleriesBar', () => {
  const $route = {
    params: {
      floor_number: 1
    }
  }
  let wrapper;

  beforeEach(() => {
    wrapper = mount(GalleriesBar, {
      mocks: {
        $route
      },
      propsData: {
        galleries: gallery1220.records
      }
    });
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  })

  test('sets class to active on click', () => {
    wrapper.find('li').trigger('click');
    expect(wrapper.element).toMatchSnapshot();
  })
});