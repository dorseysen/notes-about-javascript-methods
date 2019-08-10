import * as App from './js';

window.App = App;

Object.keys(App).forEach(item => new App[item]());
