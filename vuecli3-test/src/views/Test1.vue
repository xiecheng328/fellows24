<template>
    <div>
        <h1>子路由1</h1>
        <h1>姓名是： {{ $route.params.name }}</h1>
        <h1>年龄是： {{ $route.params.age }}</h1>
        <h1>moveId: {{ $route.params.movieId }}</h1>

        {{detail.name}}
        {{detail.img}}
        {{detail.star}}
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            detail: {}
        };
    },
    created(){
        // console.log(this);
        // console.log(this.$route.params.movieId);
        // axios.get('http://getMovieDetail?moveId' + this.$route.params.movieId).then(res=>{
        //     this.detail = res.data.movieDetail;
        // });
    }
}
</script>

