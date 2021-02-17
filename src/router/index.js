import Vue from "vue";
import VueRouter from "vue-router";
// 默认情况下导入的是index.vue，因此可以直接省略
import Login from '../views/login';
import Layout from '@/components/layout.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',  //路由名称
      component: Login  //组件对象
    },
    {
      path: '/',
      name: 'layout',  //路由名称
      component: Layout  //组件对象
    }
  ]
});

export default router;
