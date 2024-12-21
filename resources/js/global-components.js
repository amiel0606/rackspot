import { defineAsyncComponent } from 'vue';

export function registerGlobalComponents(app) {
    app.component('LandingPage', defineAsyncComponent(() => import('./components/LandingPage.vue')));
    app.component('Navbar', defineAsyncComponent(() => import('./components/navbar.vue')));
    app.component('About', defineAsyncComponent(() => import('./components/about.vue')));
}