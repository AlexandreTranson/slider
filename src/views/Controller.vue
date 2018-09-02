<template>
    <div id="controller">
    <button @click="previous">previous</button>
    <button @click="next">next</button>
    </div>
</template>

<script>
    import {store} from "../store";

    export default {
        name: "controller",
        methods: {
            previous() {
                store.db.collection("action").doc('previous').set({
                    date : Date.now(),
                })
            },
            next() {
                store.db.collection("action").doc('next').set({
                    date : Date.now(),
                })
            }
        }
    }
</script>

<style scoped lang="stylus">
    #controller
        width 100%
        height 100%
</style>