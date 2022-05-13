//入口js
import Vue from 'vue'
import 'mint-ui/lib/style.css'
import {Button} from 'mint-ui'
import App from './App'
import router from "@/router"
import store from './store'

import './mock/mockServe' //加载mockServe即可


// 注册全局组件标签
 Vue.component(Button.name, Button)  // 全局可使用<mt-button>标签

new Vue({
  el:'#app',
  render: h => h(App),
  router, //使用vue-router
  store,   //使用vuex
})
