import { createRouter, createWebHistory } from 'vue-router'
import VehicleAuction from "@/views/vehicle-auction/VehicleAuction.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "vehicle-auctions",
      component: VehicleAuction,
    },
  ]
})

export default router
