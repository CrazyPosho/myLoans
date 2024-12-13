export type FormInputs = {
  name: string;
  DNI: number;
  phone: number;
  email: string;
  loan: number;
  status: string;
};
export interface Client {
  id: number;
  name: string;
  DNI: number;
  phone: number;
  email: string;
  loan: number;
  status: string;
}
export interface ClientProps {
  client: {
    id: number;
    name: string;
    email: string;
    phone: number;
    loan: number;
    status: string;
  };
}
export interface ClientContextProps {
  clients: Client[];
  addClient: (client: Omit<Client, "id">) => void;
}
