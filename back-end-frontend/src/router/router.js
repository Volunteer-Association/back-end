import HomeView from "@/views/home/Home.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/login/Login.vue"),
  },
  {
    path: "/",
    component: HomeView,
    children: [
      {
        path: "/about",
        name: "about",
        component: () => import("@/views/about/About.vue"),
      },
    ]
  },
]

export default routes;