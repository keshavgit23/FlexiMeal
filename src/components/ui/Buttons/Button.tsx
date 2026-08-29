import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center whitespace-nowrap gap-2 rounded-xl text-xs font-bold transition";

  const variantStyles = {
    primary:
      "px-5 py-2.5 bg-gradient-to-r from-brand-tomato to-brand-saffron text-white shadow-md hover:from-red-700 hover:to-orange-600 hover:shadow-lg hover:-translate-y-0.5",

    outline:
      "px-4 py-2.5 border border-2 border-gray-200 text-gray-800 hover:!border-brand-tomato",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;