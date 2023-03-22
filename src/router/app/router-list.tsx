import { Box } from "@chakra-ui/react";
import GZHeader from "components/organisms/common/header";
import GZSidebar from "components/organisms/common/sidebar";
import GZSidebarExpand from "components/organisms/common/sidebar-expand";
import GZEditProfilePage from "components/pages/auth/edit-profile/form";
import GZIntegrationPage from "components/pages/auth/edit-profile/integration";
import GZNotificationPage from "components/pages/auth/edit-profile/notification";
import GZProposalPage from "components/pages/auth/proposal";
import GZProposalDetailPage from "components/pages/auth/proposal/detail";
import GZUserProfilePage from "components/pages/auth/user-profile";
import GZCreateDAOPage from "components/pages/dao/create";
import GZDAOProfilePage from "components/pages/dao/profile";
import GZDAOTreasuryPage from "components/pages/dao/treasury";
import GZEditUserProfile from "components/template/auth/edit-profile";
import { LAYOUT_SETTING } from "constants/layout";
import { APP_ROUTE } from "constants/route";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppRouteParam } from "router/app-routers";

const AppLayout = () => {
  const [expanded, setExpanded] = useState(false);
  return <>
    <GZSidebar onLogoClick={() => setExpanded(!expanded)} />
    <GZSidebarExpand expanded={expanded} />
    <GZHeader expanded={expanded} />
    <Box
      ms={expanded ? `calc(${LAYOUT_SETTING.SIDEBAR_WIDTH} + ${LAYOUT_SETTING.SIDEBAR_EXPAND_WIDTH})` : LAYOUT_SETTING.SIDEBAR_WIDTH}
      mt={LAYOUT_SETTING.HEADER_HEIGHT}
      px="44px"
      py="40px"
      transition="all ease-in-out .3s"
    >
      <Outlet />
    </Box>
  </>
};
export const appRouter: AppRouteParam[] = [
  {
    path: "/",
    element: <Navigate to={`/login`} replace />,
  },
  {
    path: "/*",
    element: <AppLayout />,
    childRoute: [
      {
        path: APP_ROUTE.USER_PROFILE,
        element: <GZUserProfilePage />,
      },
      {
        path: APP_ROUTE.CREATE_DAO,
        element: <GZCreateDAOPage />,
      },
      {
        path: APP_ROUTE.EDIT_PROFILE,
        element: <GZEditUserProfile />,
        childRoute: [
          {
            path: `*`,
            element: <Navigate to={`my-profile`} replace />,
          },
          {
            path: "my-profile",
            element: <GZEditProfilePage />,
            index: true,
          },
          {
            path: 'notification',
            element: <GZNotificationPage />,
          },
          {
            path: 'integration',
            element: <GZIntegrationPage />,
          }
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
      {
        path: APP_ROUTE.PROPOSAL_DETAIL,
        element: <GZProposalDetailPage />,
      },
      {
        path: APP_ROUTE.LIST_PROPOSALs,
        element: <GZProposalPage />,
      },
    ],
  },
];
