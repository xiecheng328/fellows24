<template>
    <div>
        <button @click="$store.commit('add', 2)">加1</button>
        <button @click="add(3)">mapMutations</button>
        <button @click="addAction">addAction</button>
        <!-- <h1>{{countCompouted}}</h1> -->
        <h1>{{count}}</h1>
        <h1>{{countGetter}}</h1>
    </div>
</template>

<script>
import store from "@/store.js";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  store,
  data() {
    return {};
  },
  mounted() {
    //   console.log(mapState);
  },
  methods: {
    ...mapMutations(["add"]),
    ...mapActions(["addAction"])
  },
  /* computed: {
      countCompouted(){
          return this.$store.state.count;
      }
  } */
  /*  computed: mapState({
    count: state => state.count
  }) */
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["countGetter"])
  }
};
</script>

