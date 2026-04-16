import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";
import { LoginSchema, type LoginType } from "../../modules/auth/LoginSchema";
import Input from "../../components/Base/Input";
import { useRegister } from "../../hooks/useRegister";

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });
  const { handleRegister, loading, error } = useRegister();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-8 py-10">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-2xl mb-4 shadow-lg shadow-indigo-200">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Crear cuenta</h1>
            <p className="text-sm text-gray-500 mt-1">Regístrate para comenzar</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col gap-5">
            <Input
              label="Correo electrónico"
              name="email"
              placeholder="tu@email.com"
              type="text"
              error={errors.email?.message}
              register={register}
            />
            <Input
              label="Contraseña"
              name="password"
              placeholder="••••••••"
              type="password"
              error={errors.password?.message}
              register={register}
            />

            {error && (
              <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 shadow-md shadow-indigo-100"
            >
              {loading
                ? <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                    </svg>
                    Creando cuenta...
                  </>
                : "Crear cuenta"
              }
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <hr className="flex-1 border-gray-200" />
            <span className="text-xs text-gray-400">o</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          {/* Login link */}
          <p className="text-center text-sm text-gray-500">
            ¿Ya tienes cuenta?{" "}
            <Link to="/" className="text-indigo-600 font-semibold hover:underline">
              Inicia sesión
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} MyApp. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}

export default Register;
