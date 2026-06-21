import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gradient" | "primary" | "secondary" | "text";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "gradient",
  children,
  className = "",
  ...props
}) => {
  const baseStyle =
    "font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 focus:outline-none hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none";

  const variants = {
    gradient:
      "bg-gradient-to-r from-[#0097c2] to-[#4e37f3] text-white hover:shadow-[0_8px_25px_rgba(78,55,243,0.3)]",
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-[0_8px_25px_rgba(37,99,235,0.2)]",
    secondary:
      "bg-gray-150 hover:bg-gray-200 text-gray-700",
    text:
      "text-gray-400 hover:text-gray-600 bg-transparent shadow-none hover:shadow-none p-0",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
