import { mount, RouterLinkStub } from '@vue/test-utils';
import Header from '../components/Header.vue';

describe('Header', () => {
  test('renders correctly', () => {
    const wrapper = mount(Header, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  })
});