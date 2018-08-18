import Vue from 'vue';
import Router from 'vue-router';
import Movie from '@/views/movie/Movie.vue'
import Music from '@/views/music/Music.vue'
import Book from '@/views/book/Book.vue'
import Photo from '@/views/photo/Photo.vue'
import MovieDetail from '@/views/movie/MovieDetail.vue'
import PhotoDetail from '@/views/photo/PhotoDetail.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    redirect: '/movie'
  },
  {
    path: '/movie',
    name: 'movie',
    component: Movie
  }, {
    path: '/music',
    name: 'music',
    component: Music
  }, {
    path: '/book',
    name: 'book',
    component: Book
  }, {
    path: '/photo',
    name: 'photo',
    component: Photo
  }, {
    path: '/moviedetail/:movieId',
    name: 'moviedetail',
    component: MovieDetail
  }, {
    path: '/photodetail/:idx',
    name: 'photodetail',
    component: PhotoDetail
  }, {
    path: '*',
    redirect: '/movie'
  }
  ],
});
