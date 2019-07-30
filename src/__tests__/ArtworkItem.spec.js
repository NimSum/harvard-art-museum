import { mount } from '@vue/test-utils';
import ArtworkItem from '../components/ArtworkItem.vue';
import { gallery1220 } from '../utils/mockData';

describe('ArtworkItem', () => {
  const mockArtwork = gallery1220.records[1];
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ArtworkItem, {
        propsData: {
          artwork: mockArtwork
        }
      }
    );
  })

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  })

  test('renders correctly when show details clicked', () => {
    wrapper.find('button').trigger('click');
    expect(wrapper.element).toMatchSnapshot();
  })
});