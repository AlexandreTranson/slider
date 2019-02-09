<template>
    <div class="slide">
        <h2 class="title">Test du moteur</h2>
        <div class="star-list">
            <icon class="icon" name="star-fill"/>
            <icon class="icon" name="star-stroke"/>
            <icon class="icon" name="star-stroke"/>
            <icon class="icon" name="star-stroke"/>
            <icon class="icon" name="star-stroke"/>
        </div>
    </div>
</template>

<script>
    import Icon from "../../Icon";

    export default {
        components: {Icon},
        name: "slide4"
    }
</script>

<style scoped lang="stylus">
    .slide
        display flex
        align-items center
        justify-content center
        flex-direction column
        background-image url('../../../assets/robot-pic.jpg')
        background-size cover
        .title
            font-size 2vw
            letter-spacing 0.2vw
            margin-bottom  1vw
            padding-top 5vw
        .star-list
            display flex
            opacity 0.5
            .icon
                width 1vw
                &:not(:last-child)
                    margin-right 0.5vw

</style>