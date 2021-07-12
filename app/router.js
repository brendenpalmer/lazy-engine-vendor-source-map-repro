import EmberRouter from '@ember/routing/router';
import config from 'lazy-engine-vendor-source-map/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.mount('super-blog');
});
