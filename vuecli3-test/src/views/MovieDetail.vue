<template>
    <div>
        <h1>电影详情页面</h1>
        <h1>电影ID： {{$route.params.movieId}}</h1>

        <div>{{detail.name}}</div>
        <div>{{detail.time}}</div>
        <div>{{detail.star}}</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            detail: {}
        }
    },
    created(){
        let movieId = this.$route.params.movieId;
        // axios.get('getDetail?movieId' + movieId).then(res=>{
        //     this.detail = res.data.detail;
        // });
    }
}
</script>

