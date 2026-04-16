import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type LoginType } from "../../modules/auth/LoginSchema";
import Input from "../../components/Base/Input";
import Button from "../../components/Base/Button";
import { useRegister } from "../../hooks/useRegister";

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginType>({
        resolver: zodResolver(LoginSchema),
    });
    const { handleRegister, loading, error } = useRegister();

    const onSubmit = (data: LoginType) => {
        handleRegister(data);
    };
    return (
        <div className="flex flex-col gap-8 max-w-md mx-auto">
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <Input label="Email" name="email" placeholder="Email" type="text" error={errors.email?.message} register={register} />
                <Input label="Password" name="password" placeholder="Password" type="password" error={errors.password?.message} register={register} />
                <Button label="Register" type="submit" variant="primary" />
                {error && <p className="text-red-500">{error}</p>}
                {loading && <p className="text-blue-500">Loading...</p>}
            </form>
        </div>
    )
}

export default Register