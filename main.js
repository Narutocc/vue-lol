// 2.0版本不支持ES5,要使用ES6
import Vue from 'vue';

// vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);

// vuex
import Vuex from 'Vuex';
Vue.use(Vuex);

// vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);

// muse-ui
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI)

// 引入组件:单页面所需的路由管理
import Index from './components/index.vue';
import News from './components/channels/news.vue';
import Heroes from './components/channels/heroes.vue';
import Players from './components/channels/players.vue';
import Detail from './components/detail.vue';

// 配置vue-router
var router = new VueRouter({
	routes:[{
		path:'/index',
		component:Index,
		children:[{
			path:'news',
			component:News
		},{
			path:'heroes',
			component:Heroes
		},{
			path:'players',
			component:Players
		}]
	},{
		path:'/detail/:id',
		component:Detail
	},{
		// 重定向
		path:'/',
		redirect:'/index/news'
	}]
})

// 注入构造器
new Vue({
	router:router
}).$mount('#lol')