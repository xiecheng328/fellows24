<template>
    <ul>
        <li @click="showDetail(movie)" v-for="movie in movieList" :key="movie.id">
            <!-- <router-link :to="'/moviedetail/'+movie.id"> -->
                {{ movie.name }}
            <!-- </router-link> -->
        </li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      movieList: [
        {
          id: 1,
          name: "电影1"
        },
        {
          id: 2,
          name: "电影2"
        },
        {
          id: 3,
          name: "电影3"
        },
        {
          id: 4,
          name: "电影4"
        },
        {
          id: 5,
          name: "电影5"
        }
      ]
    };
  },
  methods: {
      showDetail(movie){
        // ...
        this.$router.push('/moviedetail/' + movie.id);
      }
  }
};
</script>


<style lang="scss" scoped>
</style>

