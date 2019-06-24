 
import Vue from 'vue' 
import Button from './button.vue'
import buttonGroup from './buttonGroup.vue'
import Hicon from './compoents/icon'
Vue.component('h-button',Button)
Vue.component('h-icon',Hicon)
Vue.component('button-group',buttonGroup)
new Vue({
        el:'#app',
        data(){
                return {
                        loading:false
                }
        }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
try{
{       
        let Constructor= Vue.extend(Button)
        let vm=new Constructor({propsData:{icon:"settings"}})
        vm.$mount()
        let element=vm.$el.querySelector('use')
        let href=element.getAttribute('xlink:href')
        expect(href).to.eq('#i-settinga')
        vm.$el.remove()
        vm.$destroy()
}
{       
        let Constructor= Vue.extend(Button)
        let vm=new Constructor({propsData:{icon:"download"}})
        vm.$mount()
        let element=vm.$el.querySelector('use')
        let href=element.getAttribute('xlink:href')
        expect(href).to.eq('#i-se33')
        vm.$el.remove()
        vm.$destroy()
}
// {       
//         let Constructor=Vue.extend(Button)
//         let  vm = new  Constructor({propsData:{
//                 icon:'download',
//                 iconPosition:'right'
//         }})
//         vm.$mount('div')
//         console.log(vm.$el)

//         let element=vm.$el.querySelector('svg')
//         let {order} = window.getComputedStyle(element)
//         expect(order).to.eq('2')
        //    vm.$el.remove()
        //    vm.$destroy()
// } 
{
        // mock
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
          propsData: {
            icon: 'settings',
          }
        })
        vm.$mount()
        let spy =chai.spy(function(){

        })
        vm.$on('click',spy)
        let button=vm.$el
        button.click()
        expect(spy).to.have.been.called()
      }
}catch(e){
 window.errors=[e]
}finally{
        window.errors && window.errors.forEach(err => {
                  console.error(err.message)
        });
}