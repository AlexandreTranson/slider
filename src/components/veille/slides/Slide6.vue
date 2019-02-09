<template>
    <div class="slide">
        <h2 class="title">Interface</h2>
        <img src="@/assets/xenko-5.jpg"/>
    </div>
</template>

<script>
    export default {
        name: "slide6"
    }
</script>

<style scoped lang="stylus">
    .slide
        display flex
        align-items center
        justify-content center
        flex-direction column
        .title
            font-size 2vw
            margin-bottom  2vw
        img
            width 60vw
</style>