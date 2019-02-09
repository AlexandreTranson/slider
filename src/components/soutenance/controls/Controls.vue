<template>
    <div class="controls">
        <button @click="previous">previous</button>
        <button @click="next">next</button>
        <router-view></router-view>
    </div>
</template>

<script>
    import {store} from "@/store";

    export default {
        name: "soutenance-controls",
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

<style scoped>

</style>