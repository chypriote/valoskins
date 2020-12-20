import Vue from 'vue'
Vue.filter('ucfirst', (value: string) => value.charAt(0).toUpperCase() + value.slice(1))
