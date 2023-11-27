import StatBlock from "./components/StatBlock.tsx";
import NavBar from "./components/NavBar.tsx";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-screen w-screen mx-auto text-primary bg-background ">
        <NavBar />
        <div className="pt-12 h-2/3 w-2/3 mx-auto grid grid-cols-2 content-between gap-4 text-card-foreground">
          <div className="col-span-2 p-5 rounded-lg shadow-lg bg-card">
            <StatBlock />
          </div>
          <div>

          </div>
        </div>
      </div>
      </ThemeProvider>
  )
}

export default App
