import { Box, ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import GZHeader from "./components/organisms/common/header";
import GZSidebar from "./components/organisms/common/sidebar";
import GZEditProfilePage from "./components/pages/auth/edit-profile/form";
import GZLoginPage from "./components/pages/auth/login";
import GZUserProfilePage from "./components/pages/auth/user-profile";
import GZCreateDAOPage from "./components/pages/dao/create";
import GZDAOProfilePage from "./components/pages/dao/profile";
import GZDAOTreasuryPage from "./components/pages/dao/treasury";
import GZEditUserProfile from "./components/template/auth/edit-profile";
import { LAYOUT_SETTING } from "./constants";
import { APP_ROUTE } from "./constants/route";
import theme from "./theme/config";

const AppLayout = () => (
  <>
    <GZSidebar />
    <GZHeader />
    <Box
      ms={LAYOUT_SETTING.SIDEBAR_WIDTH}
      mt={LAYOUT_SETTING.HEADER_HEIGHT}
      px="44px"
      py="40px"
    >
      <Outlet />
    </Box>
  </>
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <GZLoginPage />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: APP_ROUTE.USER_PROFILE,
        element: <GZUserProfilePage />,
      },
      // {
      //   path: APP_ROUTE.EDIT_PROFILE,
      //   element: <GZUserProfileEditPage />,
      // },
      {
        path: APP_ROUTE.CREATE_DAO,
        element: <GZCreateDAOPage />,
      },
      {
        element: <GZEditUserProfile />,
        children: [
          {
            path: APP_ROUTE.EDIT_PROFILE,
            element: <GZEditProfilePage />,
            index: true,
          },
        ],
      },
      {
        path: APP_ROUTE.DAO_PROFILE,
        element: <GZDAOProfilePage />,
      },
      {
        path: APP_ROUTE.DAO_TREASURY,
        element: <GZDAOTreasuryPage />,
      },
    ],
  },
]);

export const App = () => (
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
