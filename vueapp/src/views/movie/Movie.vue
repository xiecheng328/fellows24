<template>
    <div>
        <ul>
            <li @click="gotoDetail(movie.id)" class="movie" v-for="movie in movieList" :key="movie.id">
                <div class="movie-img">
                      <img :src="movie.images.large" alt="">
                  </div>
                  <div class="movie-info">
                      <div class="movie-info-title">{{movie.title}}</div>
                      <div >观众评 <span class="movie-info-average">{{movie.rating.average}}</span></div>
                      <div class="movie-info-star">主演：
                          <span v-for="item in movie.casts" :key="item.id">{{item.name}}&nbsp;</span>
                      </div>
                  </div>
            </li>
        </ul>
        <div class="end" v-show="isEnd">
            <h3>数据到底了</h3>
        </div>
        <div class="loading" v-show="isLoading">
            <img src="@/assets/img/loading.gif" alt="">
        </div>
    </div>
    
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      movieList: [],
      isLoading: true,
      isEnd: false,
    };
  },
  methods: {
    getData() {
      let url1 =
        "https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/top250?start=0&count=5";
      let url2 = "https://api.myjson.com/bins/pb8vw";
      this.isLoading = true;
      axios.get(url2).then(res => {
        console.log(
          res.data.subjects.slice(
            this.movieList.length,
            this.movieList.length + 5
          )
        );
        // 由于接口不能用了，不得已采用假分页
        let getList = res.data.subjects.slice(
          this.movieList.length,
          this.movieList.length + 5
        );
        if (getList.length < 5) {
          this.isEnd = true;
        }
        this.movieList = this.movieList.concat(getList);
        this.isLoading = false;
      });
    },
    gotoDetail(movieId){
      this.$router.push(`/moviedetail/${movieId}`);
    }
  },
  created() {
    this.$emit("switchTab", "movie");
    this.getData();
  },
  mounted() {
    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight;
      let clientHeight = document.documentElement.clientHeight;
      // console.log(scrollHeight, scrollTop, clientHeight);
      if (scrollHeight == scrollTop + clientHeight && !this.isEnd) {
        // 请求数据
        this.getData();
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.movie {
  display: flex;
  padding: 0.2rem;
  border-bottom: 0.02rem solid #ccc;
  &-img {
    flex-grow: 1;
    width: 0;
    img {
      width: 100%;
    }
  }
  &-info {
    flex-grow: 3;
    width: 0;
    margin-left: 0.2rem;
    &-title {
      color: #333;
      font-weight: 700;
      font-size: 0.34rem;
    }
    &-average {
      font-weight: 700;
      color: #faaf00;
    }

    &-star {
      color: #666;
      font-size: 0.26rem;
    }
  }
   a{
      display: block;
      width: 100%;
      height: 100%;
    }
}

.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2.2rem;
  height: 2.2rem;
  img {
    width: 90%;
    position: absolute;
    padding: 0.1rem;
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 0.2rem;
  }
}

.end {
  text-align: center;
}
</style>

