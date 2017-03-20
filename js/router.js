import vue from 'vue'
import vue_router from  'vue-router'
import PAGE_ONE from '../vue/page_one.vue'
import PAGE_TWO from '../vue/page_two.vue'

vue.use(vue_router)


export default new vue_router({
    routes: [{
        path: '/page1',
        component: PAGE_ONE
    }, {
        path: '/page2',
        component: PAGE_TWO
    }]
})