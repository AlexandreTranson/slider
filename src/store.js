import Vue from 'vue';
export const bus = new Vue();

const store = {
    bus: bus,
}


export {store};