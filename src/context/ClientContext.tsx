import { createContext, ReactNode, useContext, useState } from "react";
import { ClientContextProps } from "../types/index";
import { Client } from "../types/index";

export const ClientContext = createContext<ClientContextProps | undefined>(
  undefined
);

export const ClientProvider = ({ children }: { children: ReactNode }) => {
  const [clients, setClients] = useState<Client[]>([]);

  const addClient = (client: Omit<Client, "id">) => {
    const newClient = { ...client, id: clients.length + 1 };
    setClients([...clients, newClient]);
  };

  return (
    <ClientContext.Provider value={{ clients, addClient }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClientContext = () => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error(
      "useClientContext debe ser usado dentro de un ClientProvider"
    );
  }
  return context;
};
