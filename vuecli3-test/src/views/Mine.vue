<template>
    <div>
        <h1 class="h1">这是我的测试页面</h1>

        <router-view></router-view>



       <!--  
           电影列表 通过movieId跳转 电影详情 demo
           
           <ul>
            <li v-for="(item, index) in list" :key="index">
                <router-link :to="'/detail/' + item.movieId">
                    {{item.name}}
                </router-link>
            </li>
        </ul> -->
    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped lang="scss">
$bg: #f00;
.h1{
    float: left;
    background: $bg;
}
</style>
