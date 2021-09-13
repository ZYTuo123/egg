import Home from "@/views/home";
import performance from "@/components/performance";
import abnormal from "@/components/abnormal";
import action from "@/components/action";
const routes = [
  {
    path: "/",
    redirect: "/performance",
    component: Home,
    children: [
      {
        path: "/performance",
        component: performance,
      },
      {
        path: "/abnormal",
        component: abnormal,
      },
      {
        path: "/action",
        component: action,
      },
    ],
  },
];

export default routes;
