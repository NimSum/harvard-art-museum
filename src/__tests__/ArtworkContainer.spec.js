import { mount } from '@vue/test-utils';
import ArtworkContainer from '../components/ArtworkContainer.vue';

describe('ArtworkContainer', () => {
  test('renders correctly', () => {
    const wrapper = mount(ArtworkContainer);
    expect(wrapper.element).toMatchSnapshot();
  })
});