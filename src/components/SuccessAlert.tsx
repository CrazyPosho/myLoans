import { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";

type SuccessAlertProps = {
  message?: string;
  Visible?: boolean;
};

const SuccessAlert = ({
  message = "Cliente registrado con éxito!",
  Visible = true,
}: SuccessAlertProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(Visible);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-4 right-4 w-full max-w-md animate-fade-in-down"
      role="alert"
      aria-live="polite"
    >
      <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <IoMdCheckmarkCircle className="text-2xl flex-shrink-0" />
          <p className="font-medium">{message}</p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-green-100 transition-colors duration-200"
          aria-label="Close alert"
        >
          <IoClose className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SuccessAlert;
