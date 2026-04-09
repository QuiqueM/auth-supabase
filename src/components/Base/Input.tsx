import type { InputHTMLAttributes } from "react"
import type { UseFormRegister, FieldValues, Path } from "react-hook-form"

interface InputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    error?: string;
}

function Input<T extends FieldValues>({ label, name, placeholder, type, register, error, ...rest }: InputProps<T>) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} 
                id={name} 
                placeholder={placeholder} 
                {...register(name)} 
                {...rest}
                className={`border rounded-md p-2 ${error ? "border-red-500 focus:outline-2 focus:outline-red-500" : "border-gray-300 focus:outline-2 focus:outline-blue-500"}`} 
            />
            {error && <small className="text-red-500">{error}</small>}
        </div>
    )
}

export default Input