import { mount } from '@vue/test-utils';
import ArtworkItem from '../components/ArtworkItem.vue';
import { gallery1220 } from '../utils/mockData';

describe('ArtworkItem', () => {
  const mockArtwork = gallery1220.records[1];

  test('renders correctly', () => {
    const wrapper = mount(ArtworkItem, {
        propsData: {
          artwork: mockArtwork
        }
      }
    );
    expect(wrapper.element).toMatchSnapshot();
  })
});