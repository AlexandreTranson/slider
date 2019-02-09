<template>
    <div class="slide">
        <div class="title">Résultat 😓</div>
        <div class="img-list">
            <img src="@/assets/xenko-8.jpg"/>
            <img src="@/assets/xenko-9.jpg"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "slide8"
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
        .img-list
            display flex
            img
                height  20vw
                &:not(:last-of-type)
                    margin-right 2vw

</style>