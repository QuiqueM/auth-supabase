import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    type: "submit" | "reset" | "button";
    variant?: "primary" | "secondary" | "danger";
}

function Button({ label, type, variant }: ButtonProps) {
    const variants = {
        primary: "bg-blue-500",
        secondary: "bg-gray-500",
        danger: "bg-red-500",
    }

    const variantStyle = variants[variant || "primary"];
    return (
        <button type={type} className={`text-white rounded-md p-2 ${variantStyle} hover:cursor-pointer hover:opacity-80 transition-all duration-200`}>{label}</button>
    )
}

export default Button