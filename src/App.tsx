import { ChakraProvider } from "@chakra-ui/react";
import "i18n";
import HttpProvider from "providers/http-context";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "router/app-routers";
import { appRouter } from "router/app/router-list";
import { authRouter } from "router/auth/router-list";
import { store } from "store/store";
import theme from "theme/config";

export const App = () => {
  const router = [...authRouter, ...appRouter];
  return <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Suspense fallback={<div>Loading・・・..</div>}></Suspense>
      <Provider store={store}>
        <HttpProvider>
          <AppRoutes routers={router}></AppRoutes>
        </HttpProvider>
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
};
