import { mount, RouterLinkStub } from '@vue/test-utils';
import App from '../App.vue';

describe('App', () => {
  test('renders correctly', () => {
    const wrapper = mount(App, {
      stubs: ['router-link', 'router-view']
    });
    expect(wrapper.element).toMatchSnapshot();
  })
});