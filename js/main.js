import Vue from 'vue'
import App from '../vue/app.vue'
import router from './router.js'


new Vue({
    el: '#app',
    router,
    // components: { App },
    render: function (h) {
        return h(App)
    }
})