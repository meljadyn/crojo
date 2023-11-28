import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Dashboard from "@/components/Dashboard.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import Login from "@/components/Login.tsx";
import Register from "@/components/Register.tsx";
import NavBar from "@/components/NavBar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/*<div className="h-screen w-screen mx-auto text-primary bg-background">*/}
        <NavBar />
        <div className="mt-24 h-screen w-screen mx-auto text-primary bg-background">
          <RouterProvider router={router} />
        </div>
      {/*</div>*/}
    </ThemeProvider>
  </React.StrictMode>,
)
