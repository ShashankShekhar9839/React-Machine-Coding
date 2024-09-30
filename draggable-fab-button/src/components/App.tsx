import { Profiler } from "react";
import "../css/App.css";
import DraggableFab from "./DraggableFab";

function App() {
  return (
    <div className="app-container">
      <Profiler>
        <DraggableFab />
      </Profiler>
    </div>
  );
}

export default App;
