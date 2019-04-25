import Home from './components/Home.vue';
import Dismiss from './components/Dismiss.vue';
import Dashboard from './components/Dashboard.vue';
import { authMixin } from './mixins/authMixin';
import VueAxios from 'vue-axios'
import axios from 'axios';

export const routes = [
    { path: '/', component: Home },
    { path: '/dismiss', component: Dismiss },
    { path: '/dashboard', component: Dashboard, beforeEnter: (to, from, next) => {
        authMixin.methods.checkToken("google", next)
    }},
]