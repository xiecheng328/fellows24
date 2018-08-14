<template>
    <h1>music</h1>
</template>


<script>
export default {
    created(){
        // console.log('music');
        this.$emit('switchTab', 'music');
    }
}
</script>

<style lang="scss" scoped>

</style>

