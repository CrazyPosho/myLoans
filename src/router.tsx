import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./page/Home";

import Layout from "./layout/Layout";
import { ClientProvider } from "./context/ClientContext";

const PendingClientsList = lazy(() => import("./page/PendingClientsList"));
const FormRegisterClient = lazy(() => import("./page/FormRegisterClient"));

export const AppRoutes = () => {
  return (
    <ClientProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/registerClient"
              element={
                <Suspense fallback="Cargando...">
                  <FormRegisterClient />
                </Suspense>
              }
            />
            <Route
              path="/pendingClientsList"
              element={
                <Suspense fallback="Cargando...">
                  <PendingClientsList />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ClientProvider>
  );
};
