import { Box, ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import GZHeader from "./components/organisms/global/header";
import GZSidebar from "./components/organisms/global/sidebar";
import GIZExploreDAOPage from "./components/pages/dao/explorer";
import GZLoginPage from "./components/pages/auth/login";
import GZUserProfilePage from "./components/pages/auth/user-profile";
import GZUserEditProfilePage from "./components/pages/auth/user-profile/edit";
import GZSubUserProfileEdit from "./components/template/auth/edit-profile/editform";
import Notification from "./components/template/notification";
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
      {
        
        element: <GZUserEditProfilePage />,
        children:[
          {
            path:'notification',
            element:<Notification />
          },
          {
            // path:'editProfile',
            path: APP_ROUTE.EDIT_PROFILE,
            element:<GZSubUserProfileEdit />,
            index: true
          },
          // {
          //   path:'',
          //   element:<GZUserEditProfilePage />
          // },
        ]
      },

      {
        path: APP_ROUTE.EXPLORE_ORGANIZATION,
        element: <GIZExploreDAOPage />,
      },
    ],
  }
]);

export const App = () => (
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
)
