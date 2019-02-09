<template>
    <div class="slide" >
        <h2 class="title"><span>Open Source ! 😍</span> </h2>
        <h2 class="subtitle"> Depuis le 2 août 2018, il rejoint Blender, Chromium, Firefox, VLC...</h2>
    </div>
</template>

<script>
    import {store} from "../../../store";

    export default {
        name: "slide3",
        methods: {
        },
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
            span
                margin-right 1vw
        .subtitle
            font-size 1.1vw
            margin-bottom  5vw
            opacity 0.3

</style>