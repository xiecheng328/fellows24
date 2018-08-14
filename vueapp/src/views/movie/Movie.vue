<template>
    <h1>movie</h1>
</template>


<script>
export default {
    created(){
        this.$emit('switchTab', 'movie');
    }
}
</script>

<style lang="scss" scoped>

</style>

