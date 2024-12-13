import { ClientProps } from "../types/index.ts";
import { formatToCurrency } from "../utils/useMoney.ts";

const ClientInfo = ({ client }: ClientProps) => {
  return (
    <tr key={client.id}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {client.name}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 dark:text-gray-100">
          {client.email}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {client.phone}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 dark:text-gray-100">
          {formatToCurrency(client.loan)}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
          {client.status}
        </span>
      </td>
    </tr>
  );
};

export default ClientInfo;
