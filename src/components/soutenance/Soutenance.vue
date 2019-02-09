<template>
    <div class="slider" >
        <div class="slide-wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "soutenance"
    }
</script>

<style scoped lang="stylus">
    #header
        position absolute
        left 0
        top :0
    .slider
        width 100%
        height  100%
        .slide-wrapper
            width 100%
            height 100%
            position relative
            .slide
                position absolute
                left 0
                top: 0
                width 100%
                height 100%
</style>