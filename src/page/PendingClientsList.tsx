import ClientInfo from "../components/ClientInfo";
import { useClientContext } from "../context/ClientContext";

const PendingClientsList = () => {
  const { clients } = useClientContext();
  console.log(clients.length);
  console.log(clients.length);


  return clients.length === 0 ? (
    <div className="mx-auto px-32 py-96 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl text-center font-bold text-gray-800 dark:text-gray-100">
        No hay clientes pendientes
      </h1>
    </div>
  ) : (
    <div className="mx-auto px-14 py-96 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Clientes Pendientes
      </h1>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full  divide-gray-200 dark:divide-gray-700 border-collapse">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                  Cliente
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                  Contacto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                  Cantidad
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                  Semana
                </th>
              </tr>
            </thead>
            <tbody className=" bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {clients.map((client) => (
                <ClientInfo key={client.id} client={client} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingClientsList;
