import GZLoginPage from "components/pages/auth/login";
import { AppRouteParam } from "router/app-routers";

export const authRouter: AppRouteParam[] = [
    {
      path: "/",
      element: <GZLoginPage />,
    },
    {
      path: "/login",
      element: <GZLoginPage />,
    }
  ];
  