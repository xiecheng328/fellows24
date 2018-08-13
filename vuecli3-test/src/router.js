import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mine from './views/Mine.vue';
import Test1 from './views/Test1.vue'
import Test2 from './views/Test2.vue'
import TestUrl from './views/TestUrl.vue'
import Error from './views/Error.vue'
import Movie from './views/Movie.vue'
import MovieDetail from './views/MovieDetail.vue'
import Count from './views/Count.vue'

Vue.use(Router);
const router = new Router({
  mode: 'history',//hash
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
      beforeEnter: (to, from, next) => {
        // ...
        next();
      }
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
    }, {
      path: '*',
      component: Error
    }, {
      path: '/movie',
      component: Movie
    }, {
      path: '/moviedetail/:movieId',
      component: MovieDetail
    }, {
      path: '/count',
      component: Count
    }
  ],
});

router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  next();
});

router.afterEach((to, from) => {
  // ...
})

export default router;
