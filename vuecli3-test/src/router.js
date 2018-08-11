import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mine from './views/Mine.vue';
import Test1 from './views/Test1.vue'
import Test2 from './views/Test2.vue'
import TestUrl from './views/TestUrl.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    }, {
      path: '/mine',
      name: 'mine',
      component: Mine,
      alias: '/minealias',
      children: [
        {
          path: 'test1',
          name: 'test1',
          component: Test1,
        }, {
          path: 'test2',
          name: 'test2',
          component: Test2
        }
      ]
    }, {
      path: '/testUrl/:userid/:username',
      component: TestUrl
    }, {
      path: '/xx/:userid/:username',
      redirect: '/testUrl/:userid/:username'
    }
  ],
});
