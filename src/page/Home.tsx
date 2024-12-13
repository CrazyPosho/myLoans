import { Outlet, Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <main className="pt-24 pb-16 px-4 flex flex-col items-center justify-center min-h-screen">
        <div
          className="space-y-4 mx-auto max-w-md flex flex-col items-center justify-center
        "
        >
          <Link to="/registerClient">
            <Button label="Registrar Cliente"></Button>
          </Link>
          <Link to="/pendingClientsList">
            <Button label="Clientes Pendientes"></Button>
          </Link>
        </div>
      </main>
      <Outlet />
    </div>
  );
};

export default Home;
