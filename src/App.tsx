import StatBlock from "./components/StatBlock.tsx";
import NavBar from "./components/NavBar.tsx";
// import './App.css'

function App() {
  return (
      <div className="h-screen w-screen mx-auto text-cyan-950 bg-cyan-50 dark:text-cyan-50 dark:bg-gray-800">
          <NavBar />
        <div className="h-2/3 w-2/3 mx-auto grid grid-cols-2 content-between gap-4">
          <div className="col-span-2 p-5 rounded-lg shadow-lg bg-amber-50 h-24">
            <StatBlock />
          </div>
          <div>

          </div>
        </div>
      </div>
  )
}

export default App
