<template>
    <div class="slider" >
        <div class="slide-wrapper">
            <router-view></router-view>
        </div>
        <header-slider id="header" />
    </div>
</template>

<script>
    import Slide1 from "@/components/veille/slides/Slide1";
    import Slide2 from "@/components/veille/slides/Slide2";
    import HeaderSlider from "@/components/veille/HeaderSlider";

    export default {
        components: {
            Slide2,
            HeaderSlider,
            Slide1},
        name: "veille",
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