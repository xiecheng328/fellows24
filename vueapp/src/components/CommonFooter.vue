<template>
    <ul class="footer" :style="{background: bgColor}">
        <li class="footer-menu" v-for="(menu, index) in menuList" :key="index">
            <router-link @click.native="selectMenu(menu)" :to="menu.path">{{menu.title}}</router-link>
        </li>
    </ul> 
</template>


<script>
export default {
  data() {
    return {
      bgColor: ""
    };
  },
  props: ["menuList"],
  methods: {
    selectMenu(menu) {
      this.bgColor = menu.bgColor;
      this.$emit('changeTitle', menu);
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  background-color: #e54847;
  &-menu {
    flex-grow: 1;
    text-align: center;
    a {
      color: #ccc;
      outline: none;
      &.router-link-active {
        color: #fff;
      }
    }
  }
}
</style>
