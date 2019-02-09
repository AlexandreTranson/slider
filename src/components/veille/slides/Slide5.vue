<template>
    <div class="slide">
        <div class="slide">
            <h2 class="title">Installation</h2>
        </div>
        <div class="screen-list">
            <img src="@/assets/xenko-1.jpg"/>
            <img src="@/assets/xenko-2.jpg"/>
            <img src="@/assets/xenko-3.jpg"/>
            <img src="@/assets/xenko-4.jpg"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "slide5"
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
            margin-bottom  5vw
        .screen-list
            display flex
            justify-content space-between
            img
                height 15vw
                flex-shrink 0
</style>