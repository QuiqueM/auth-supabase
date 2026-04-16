import { useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../plugins/supabase";
import type { LoginType } from "../modules/auth/LoginSchema";
import { useAuthStore } from "../store/authStore";

export function useRegister() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleRegister = async ({ email, password }: LoginType) => {
    setLoading(true);
    setError("");
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setError(error.message);
    } else {
      setUser(data.user);
      navigate("/dashboard");
    }
    setLoading(false);
  };

  return { error, loading, handleRegister };
}
