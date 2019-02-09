import Slides from '@/components/soutenance/slides/Slides'
import Slide1 from '@/components/soutenance/slides/Slide1'
import Controls from '@/components/soutenance/controls/Controls'
import Control1 from '@/components/soutenance/controls/Control1'
import Soutenance from '@/components/soutenance/Soutenance'

const soutenanceRoutes = {
    path: 'soutenance',
    component: Soutenance,
    children: [

        {
            path: 'controls',
            name: 'soutenance-controls',
            component: Controls,
            children: [{
                path: '1',
                name: 'soutenance-control-1',
                component: Control1
            }]
        },
        {
            path: '',
            name: 'soutenance-slides',
            component: Slides,
            children: [{
                path: '1',
                name: 'soutenance-slide-1',
                component: Slide1
            }]
        },
        {path: '*', redirect: '/'},]
}

export {soutenanceRoutes}