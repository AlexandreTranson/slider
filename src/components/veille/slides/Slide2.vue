<template>
    <div class="slide" >
        <h2 class="title">Développé par le <span>Silicon Studio</span></h2>
        <h3 class="subtitle">Créateur du jeu video magic card</span></h3>
        <div class="magic-cards">
            <img src="@/assets/card-1.jpg"/>
            <img src="@/assets/card-2.jpg"/>
            <img src="@/assets/card-3.jpg"/>
        </div>
    </div>
</template>

<script>
    import {store} from "../../../store";

    export default {
        name: "slide2",
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
                font-style italic
                font-weight 300
        .subtitle
            font-size 1.1vw
            margin-bottom  5vw
            opacity 0.3
        .magic-cards
            display flex
            img
                height  20vw
                &:not(:last-of-type)
                    margin-right 2vw




</style>