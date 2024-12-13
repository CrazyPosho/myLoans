import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import PendingClientsList from "./page/PendingClientsList";
import FormRegisterClient from "./page/FormRegisterClient";
import Layout from "./layout/Layout";
import { ClientProvider } from "./context/ClientContext";

export const AppRoutes = () => {
  return (
    <ClientProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/registerClient" element={<FormRegisterClient />} />
            <Route
              path="/pendingClientsList"
              element={<PendingClientsList />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ClientProvider>
  );
};
