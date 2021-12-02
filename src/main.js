import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from '@/router';
import axios from 'axios';
import store from './store';
import { initializeApp } from 'firebase/app';

Vue.prototype.axios = axios;

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    store,
    created() {
        const firebaseConfig = {
            apiKey: "AIzaSyCY1F5rL1NyPCs0GdHkwsMWrgj60f9E1_4",
            authDomain: "sitelab-703e5.firebaseapp.com",
            databaseURL: "https://sitelab-703e5-default-rtdb.firebaseio.com",
            projectId: "sitelab-703e5",
            storageBucket: "sitelab-703e5.appspot.com",
            messagingSenderId: "210139815459",
            appId: "1:210139815459:web:43a046c2ef3ecd7f385b96"
        };
        initializeApp(firebaseConfig);
    },
    render: (h) => h(App),
}).$mount('#app');
