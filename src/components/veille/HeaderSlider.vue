<template>
    <header v-if="display">
        <icon class="xenko" name="xenko"/>
        <h2 class="subtitle">Game engine</h2>
    </header>
</template>

<script>
    import Icon from "../Icon";
    import {store} from "../../store";

    export default {
        components: {Icon},
        name: "header-slider",
        data() {
            return {
                display : true
            }
        },
        mounted() {
            store.bus.$on('displayHeader', (value) => {
                this.display = value;
            });
        }
    }
</script>

<style scoped lang="stylus">
    header
        width 100%
        display flex
        align-items center
        box-sizing border-box
        padding 3vw 5vw
        .xenko
            width 7vw
            margin-right 2vw
        .subtitle
            font-size 0.8vw
            opacity 0.3
</style>