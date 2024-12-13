import { Link, Outlet, useLocation } from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";
import Button from "../components/Button";

const Layout = () => {
  const location = useLocation().pathname;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        {location !== "/" && (
          <Link to="/" className="absolute top-4 left-4">
            <Button label="Atras"></Button>
          </Link>
        )}
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="../public/logo.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
          <DarkModeToggle />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
