import { createRouter, createWebHistory } from "vue-router";

import Login from '../components/LoginForm.vue'

import Home from '../components/admin/Home.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("../components/admin/LoginView.vue"),
    },
    {
      path: "/loginform",
      component: () => import("../components/LoginForm.vue"),
    },
    {
      path: "/home",
      component: () => import("../components/admin/Home.vue"),
    },
    {
      path: "/myinfo",
      component: () => import("../components/admin/MyInfo.vue"),
    },
    {
      path: "/nearbyparking",
      component: () => import("../components/admin/NearbyParking.vue"),
    },
    {
      path: "/ordermanagement",
      component: () => import("../components/admin/OrderManagement.vue"),
    },
    {
      path: "/parkingmanagement",
      component: () => import("../components/admin/ParkingManagement.vue"),
    },
  
  
  ],
});



export default router;
