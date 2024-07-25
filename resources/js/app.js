import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import components
import App from './components/App.vue';
import VehicleList from './components/VehicleList.vue';
import VehicleForm from './components/VehicleForm.vue';
import Vehicle from './components/Vehicle.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/dashboard', component: VehicleList },
        { path: '/vehicles/create', component: VehicleForm },
        { path: '/vehicles/:id', component: Vehicle },
        { path: '/vehicles/:id/edit', component: VehicleForm },
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');