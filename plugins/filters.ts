import Vue from 'vue'
Vue.filter('capitalize', (value: string) => value.charAt(0).toUpperCase() + value.slice(1))
