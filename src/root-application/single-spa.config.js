import { registerApplication, start } from 'single-spa'

registerApplication(
  // Name of our single-spa application
  'app-1',
  // loadingFunction
  () => import('../app1/app1.js'),
   // activityFunction
   // (location) => location.pathname === "" || location.pathname === "/" || location.pathname.startsWith('/home')
    pathPrefix('/app1')
);

registerApplication(
  // Name of our single-spa application
  'app-2',
  // loadingFunction
  () => import('../app2/app2.js'),
   // activityFunction
   // (location) => location.pathname === "" || location.pathname === "/" || location.pathname.startsWith('/home')
    pathPrefix('/app2')
);

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}

start();