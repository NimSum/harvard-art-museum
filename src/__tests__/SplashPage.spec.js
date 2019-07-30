import { mount } from '@vue/test-utils';
import SplashPage from '../components/SplashPage.vue';
import getAnything from '../utils/apiFetches';
import apiUrls from '../utils/apiUrlGenerator';
import { mockImages } from '../utils/mockData';

jest.mock('../utils/apiFetches')
getAnything.mockImplementation(() => Promise.resolve(mockImages));

describe('SplashPage', () => {
  test('renders correctly', () => {
    const wrapper = mount(SplashPage);
    expect(wrapper.element).toMatchSnapshot();
  })
});