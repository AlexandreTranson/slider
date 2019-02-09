<template>
    <div class="slider" >
        <div class="slide-wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "soutenance",
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

<style scoped lang="stylus">
    #header
        position absolute
        left 0
        top :0
    .slider
        width 100%
        height  100%
        .slide-wrapper
            width 100%
            height 100%
            position relative
            .slide
                position absolute
                left 0
                top: 0
                width 100%
                height 100%
</style>