/* globals Vue, VueRouter*/


// Imports
import '../styles/main.scss';
import Vue from 'vue/dist/vue.esm.js';
import VueRouter from 'vue-router';

// Components
import { index } from './index.js';

// Routes
const routes = [
  { path: '/', component: index }
];

// Router
const router = new VueRouter({
  routes
});

Vue.use(VueRouter);

// Vue
new Vue({
  el: '#app',
  router
});
