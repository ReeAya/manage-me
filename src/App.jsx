import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: [],
  });

  function handleStartAddingProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  }

  let content;
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddingProject={handleStartAddingProject} />
      <NoProjectSelected onStartAddingProject={handleStartAddingProject} />
    </main>
  );
}

export default App;
