import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type LoginType } from "../../modules/auth/LoginSchema";
import Input from "../../components/Base/Input";
import Button from "../../components/Base/Button";
import { useLogin } from "../../hooks/useLogin";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const { handleLogin, error, loading } = useLogin();

  const onSubmit = (data: LoginType) => {
    handleLogin(data);
  };
  return (
    <div className="flex flex-col gap-8 max-w-md mx-auto">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          label="Email"
          name="email"
          placeholder="Email"
          type="text"
          error={errors.email?.message}
          register={register}
        />
        <Input
          label="Password"
          name="password"
          placeholder="Password"
          type="password"
          error={errors.password?.message}
          register={register}
        />
        <Button label="Login" type="submit" variant="primary" />
        {error && <small className="text-red-500">{error}</small>}
        {loading && <small className="text-blue-500">Loading...</small>}
      </form>
    </div>
  );
}

export default Login;
