import Slide1 from '@/components/veille/slides/Slide1'
import Slide2 from '@/components/veille/slides/Slide2'
import Slide3 from '@/components/veille/slides/Slide3'
import Slide4 from '@/components/veille/slides/Slide4'
import Slide5 from '@/components/veille/slides/Slide5'
import Slide6 from '@/components/veille/slides/Slide6'
import Slide7 from '@/components/veille/slides/Slide7'
import Slide8 from '@/components/veille/slides/Slide8'
import Slide9 from '@/components/veille/slides/Slide9'
import Veille from '@/components/veille/Veille'

const veilleRoutes = {
    path: 'veille',
    component: Veille,
    children: [{
        path: '1',
        name: 'slide1',
        component: Slide1
    }, {
        path: '2',
        name: 'slide2',
        component: Slide2
    }, {
        path: '3',
        name: 'slide3',
        component: Slide3
    }, {
        path: '4',
        name: 'slide4',
        component: Slide4
    }, {
        path: '5',
        name: 'slide5',
        component: Slide5
    }, {
        path: '6',
        name: 'slide6',
        component: Slide6
    }, {
        path: '7',
        name: 'slide7',
        component: Slide7
    }, {
        path: '8',
        name: 'slide8',
        component: Slide8
    }, {
        path: '9',
        name: 'slide9',
        component: Slide9
    },
    {path: '*', redirect: '/'},]
}

export { veilleRoutes }