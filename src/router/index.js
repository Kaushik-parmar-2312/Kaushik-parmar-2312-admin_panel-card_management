import { createRouter, createWebHistory } from 'vue-router';
import AdminPanel from '../components/AdminPanel.vue';
import Dashboard from '../views/Dashboard.vue';
import Users from '../views/Users.vue';
import Settings from '../views/Settings.vue';

const routes = [
  {
    path: '/',
    component: AdminPanel,
    children: [
      { path: '', component: Dashboard },
      { path: 'users', component: Users },
      { path: 'settings', component: Settings },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;