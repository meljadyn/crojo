import { MantineProvider } from "@mantine/core"
import '@mantine/core/styles.css';
import ProjectList from "./components/ProjectList.tsx";
import './App.css'

function App() {
  return (
    <MantineProvider>
        <ProjectList />
    </MantineProvider>
  )
}

export default App
