<template>
    <div class="slide" >
        <icon id="xenko-icon" name="xenko"/>
        <h1>Game Engine</h1>
    </div>
</template>

<script>
    import Icon from "../../Icon";
    import {store} from "../../../store";

    export default {
        components: {Icon},
        name: "slide1",
        props: ['show'],
        methods: {

        },
        mounted(){
            store.bus.$emit('displayHeader', false);
            console.log('test')
        },
        destroyed() {
            store.bus.$emit('displayHeader', true);
        }
    }
</script>

<style scoped lang="stylus">
    .slide
        width 100%
        height 100%
        display flex
        align-items center
        justify-content center
        flex-direction column
    #xenko-icon
        width 20vw
        margin-bottom 2vw
    h1
        font-size 1vw
        opacity 0.3

</style>
