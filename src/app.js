 
import Vue from 'vue' 
import Button from './button.vue'
import Hicon from './compoents/icon'
Vue.component('h-button',Button)
Vue.component('h-icon',Hicon)
console.log(Hicon)
new Vue({
        el:'#app'
})