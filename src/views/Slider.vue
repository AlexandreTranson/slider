<template>
    <router-view></router-view>
</template>

<script>
    import {store} from "@/store";

    export default {
        name: "slider",
        data(){
            return {
                firstPrevious : false,
                firstNext : false,
            }
        },
        mounted() {

            window.addEventListener('keydown', this.onKeyDown);

            store.db.collection('action').doc('previous').onSnapshot((snapshot) => {
                this.firstPrevious? this.previous() : this.firstPrevious = !this.firstPrevious;
            });
            store.db.collection('action').doc('next').onSnapshot((snapshot) => {
                this.firstNext? this.next() : this.firstNext = !this.firstNext;
            });
        },
        methods:  {
            onKeyDown(e) {
                if(e.key === 'ArrowRight') {
                    this.next()
                }
                if(e.key === 'ArrowLeft') {
                    this.previous()
                }
            },
            previous() {
                const paths = this.$route.path.split('/');
                this.currentSlide =  parseInt(paths[2]) - 1;
                this.navigate()
            },
            next() {
                const paths = this.$route.path.split('/');
                this.currentSlide =  parseInt(paths[2]) + 1;
                this.navigate();
            },
            navigate() {
                const paths = this.$route.path.split('/');
                this.$router.push( '/' + paths[1] + '/' + this.currentSlide);
            }
        },
        destroyed() {
            window.addEventListener('keydown', this.onKeyDown);
        }
    }
</script>

<style scoped>

</style>