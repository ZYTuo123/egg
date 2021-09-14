import Home from "@/views/home";
import performance from "@/components/performance";
import abnormal from "@/components/abnormal";
import action from "@/components/action";
import network from "@/components/network";
import analysis from "@/components/analysis";
const routes = [
  {
    path: "/",
    redirect: "/abnormal",
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
      {
        path: "/network",
        component: network,
      },
      {
        path: "/analysis",
        component: analysis,
      },
    ],
  },
];

export default routes;
