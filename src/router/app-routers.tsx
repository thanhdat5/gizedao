import { memo, VFC } from "react";
import { Route, RouteProps, Routes } from "react-router-dom";

export type AppRouteParam = RouteProps & {
  useFlg?: boolean;
  path: string;
  element: React.ReactElement;
  childRoute?: AppRouteParam[];
};

type Props = {
  routers?: AppRouteParam[];
  children?: React.ReactNode;
};

const AppRoutes: VFC<Props> = memo(({ routers = [], children }) => {
  return (
    <>
      {children}
      <Routes>
        {routers.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route?.childRoute &&
              route.childRoute.map((child) => (
                <Route
                  key={child.path}
                  path={child.path}
                  element={child.element}
                >
                  {child?.childRoute &&
                    child.childRoute.map((child2) => (
                      <Route
                        key={child2.path}
                        path={child2.path}
                        element={child2.element}
                      />
                    ))}
                </Route>
              ))}
          </Route>
        ))}
      </Routes>
    </>
  );
});

export default AppRoutes;
