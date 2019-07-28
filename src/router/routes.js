import FloorContainer from '../components/FloorContainer.vue';
import ArtworkContainer from '../components/ArtworkContainer.vue';

const routes = [
  { path: '/floor/:floor_number', component: FloorContainer },
  { path: '/', component: ArtworkContainer },
];

export default routes;