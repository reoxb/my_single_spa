import { registerApplication, start } from 'single-spa'

registerApplication(
  // Name of our single-spa application
  'home',
  // loadingFunction
  () => import('./src/home/home.app.js'),
  // activityFunction
  (location) => location.pathname === "" || location.pathname === "/" || location.pathname.startsWith('/home')
);

start();