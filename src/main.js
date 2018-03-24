// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import SearchResults from './components/SearchResults';
import InputComponent from './components/InputComponent';

Vue.component('SearchResults', SearchResults);
Vue.component('InputComponent', InputComponent);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
