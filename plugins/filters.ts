import Vue from 'vue'

export const ucfirst = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)
Vue.filter('ucfirst', ucfirst)
