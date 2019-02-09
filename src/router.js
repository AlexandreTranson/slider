import Vue from 'vue'
import Router from 'vue-router'
import Slider from './views/Slider.vue'
import {veilleRoutes} from "./components/veille/routes";
import {ideaProjectDmii2Routes} from "./components/idea-project-dmii2/routes";
import {soutenanceRoutes} from "./components/soutenance/routes";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'slider',
            component: Slider,
            children: [
                veilleRoutes,
                ideaProjectDmii2Routes,
                soutenanceRoutes
            ]
        }
    ]
})
