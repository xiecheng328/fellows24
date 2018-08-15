<template>
    <header class="header" :style="{background: selectMenu.bgColor}">
        <span class="header-home" @click="$router.push('/')">首页</span>
        <h3 class="header-title">{{selectMenu.title?selectMenu.title:'电影'}}</h3>
    </header>
</template>

<script>
export default {
    props: ['selectMenu']
};
</script>

<style lang="scss" scoped>
.header {
  height: 1rem;
  background-color: #e54847;
  line-height: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;

  &-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &-home {
    margin-left: 0.2rem;
  }
}
</style>
