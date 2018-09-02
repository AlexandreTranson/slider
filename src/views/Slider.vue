<template>
    
</template>

<script>
    import {store} from "../store";

    export default {
        name: "slider",
        data(){
            return {
                firstPrevious : false,
                firstNext : false,
            }
        },
        mounted() {
            store.db.collection('action').doc('previous').onSnapshot((snapshot) => {
                this.firstPrevious? this.previous() : this.firstPrevious = !this.firstPrevious;
            });
            store.db.collection('action').doc('next').onSnapshot((snapshot) => {
                this.firstNext? this.next() : this.firstNext = !this.firstNext;
            });
        },
        methods:  {
            previous() {
                console.log('previous')
            },
            next() {
                console.log('next')
            }
        }
    }
</script>

<style scoped>

</style>