import { Auth } from "@supabase/auth-ui-react"
import supabase from "@/supabase.ts";
import { ThemeSupa } from "@supabase/auth-ui-shared/"
import {useEffect, useState} from "react";
import { useNavigate} from "react-router-dom"

function Login() {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('vite-ui-theme') || "dark");
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()

  // Listen for and dynamically update theme
  window.addEventListener('themeUpdate',  () => {setCurrentTheme(localStorage.getItem("vite-ui-theme") || "dark")})

  // Listen for email/password authentication and redirect
  supabase.auth.onAuthStateChange(async (event) => {
    if (event == "SIGNED_IN") setLoggedIn(true)
  })

  // Redirect if logged in
  useEffect(() => {
    if (loggedIn) navigate("/", { replace: true })
  }, [loggedIn, navigate])

  return (
    <div className="w-1/3 px-6 pt-3 mx-auto border border-border rounded">
      <h1 className="text-4xl font-mono font-black text-foreground">RollPG</h1>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google", "facebook", "discord", "twitch"]}
        theme={currentTheme}
      />
    </div>

  )
}

export default Login;