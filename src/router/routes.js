import FloorContainer from '../components/FloorContainer.vue';
import SplashPage from '../components/SplashPage.vue';

const routes = [
  { path: '/floor/:floor_number', component: FloorContainer },
  { path: '/', component: SplashPage },
];

export default routes;