import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useClientContext } from "../context/ClientContext";
import { FormInputs } from "../types";

const FormRegisterClient = () => {
  const { addClient } = useClientContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    addClient({
      ...data,
    });

    alert("Cliente registrado exitosamente");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
      <Link to="/" className="absolute top-4 left-4">
        <Button label="Atras"></Button>
      </Link>
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg dark:shadow-gray-700 transition-colors duration-500">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100 transition-colors duration-500">
            Formulario de Registro
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-500"
              >
                Nombre Completo
              </label>
              <input
                id="name"
                type="text"
                {...register("name", {
                  required: "Nombre es obligatorio",
                  maxLength: {
                    value: 30,
                    message: "Máximo 30 caracteres",
                  },
                })}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 focus:z-10 sm:text-sm transition-colors duration-500"
                placeholder="Nombre del cliente"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 transition-colors duration-500">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="DNI"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-500"
              >
                Número de Cédula
              </label>
              <input
                id="DNI"
                type="number"
                {...register("DNI", {
                  required: "Número de cédula es obligatorio",
                  minLength: {
                    value: 11,
                    message: "Número de cédula debe tener 11 dígitos",
                  },
                  maxLength: {
                    value: 11,
                    message: "Número de cédula debe tener 11 dígitos",
                  },
                })}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 focus:z-10 sm:text-sm transition-colors duration-500"
                placeholder="Ingrese el número de cédula del cliente"
              />
              {errors.DNI && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 transition-colors duration-500">
                  {errors.DNI.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-500"
              >
                Número de Teléfono
              </label>
              <input
                id="phone"
                type="number"
                {...register("phone", {
                  required: "Número de teléfono es obligatorio",
                  minLength: {
                    value: 10,
                    message: "Número de teléfono debe tener 10 dígitos",
                  },
                  maxLength: {
                    value: 10,
                    message: "Número de teléfono debe tener 10 dígitos",
                  },
                })}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 focus:z-10 sm:text-sm transition-colors duration-500"
                placeholder="Ingrese el número de teléfono"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 transition-colors duration-500">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-500"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email es obligatorio",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido",
                  },
                })}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 focus:z-10 sm:text-sm transition-colors duration-500"
                placeholder="Ingrese el email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 transition-colors duration-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="loan"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-500"
              >
                Monto del Préstamo
              </label>
              <input
                id="loan"
                type="number"
                {...register("loan", {
                  required: "Monto es obligatorio",
                  min: {
                    value: 1000,
                    message: "Monto debe ser mayor o igual a $1000",
                  },
                  max: {
                    value: 1000000,
                    message: "Monto debe ser menor o igual a $1000000",
                  },
                })}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 focus:z-10 sm:text-sm transition-colors duration-500"
                placeholder="Ingrese el monto del préstamo"
              />
              {errors.loan && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 transition-colors duration-500">
                  {errors.loan.message}
                </p>
              )}
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Button label="Registrar Préstamo" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegisterClient;
