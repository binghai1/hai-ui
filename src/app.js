 
import Vue from 'vue' 
import Button from './button.vue'
import buttonGroup from './buttonGroup.vue'
import Hicon from './compoents/icon'
Vue.component('h-button',Button)
Vue.component('h-icon',Hicon)
Vue.component('button-group',buttonGroup)
console.log(Hicon)
new Vue({
        el:'#app',
        data(){
                return {
                        loading:false
                }
        }
})