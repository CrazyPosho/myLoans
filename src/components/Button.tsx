interface ButtonProps {
  label?: string;
  parentMethod?: () => void;
}

const Button = ({ label, parentMethod }: ButtonProps) => {
  return (
    <button
      onClick={parentMethod}
      className={
        "p-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition duration-150 ease-in-out"
      }
    >
      {label}
    </button>
  );
};

export default Button;
