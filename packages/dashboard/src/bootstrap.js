import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount function (don't export react compont as container app might not use react)
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// If development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');
  if (devRoot) {
    // Provide a browser history in isolation mode so that path is visible in address bar
    mount(devRoot);
  }
}

// We are running containerized so export the mount function
export { mount };
