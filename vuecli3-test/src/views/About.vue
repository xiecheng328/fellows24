<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>Vuex count: {{$store.state.count}}</h1>
  </div>
</template>

<script>
import store from '@/store.js'
export default {
  store
}
</script>

