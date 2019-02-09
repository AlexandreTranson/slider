import Slide1 from '@/components/idea-project-dmii2/slides/Slide1'
import Veille from '@/components/idea-project-dmii2/IdeaProjectDmii2'

const ideaProjectDmii2Routes = {
    path: 'idea-project-dmii2',
    component: Veille,
    children: [{
        path: '1',
        name: 'idea-project-dmii2-1',
        component: Slide1
    },
    {path: '*', redirect: '/'},]
}

export { ideaProjectDmii2Routes }