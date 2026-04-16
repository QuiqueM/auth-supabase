import { useState } from "react";
import { supabase } from "../plugins/supabase";
import type { LoginType } from "../modules/auth/LoginSchema";

export function useRegister() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async ({ email, password }: LoginType) => {
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return {
    error,
    loading,
    handleRegister,
  };
}
