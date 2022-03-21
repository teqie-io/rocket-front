
import './App.css';
import Settings from "./Settings"
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    
       <Routes>
            <Route path="/" element={  <Settings/>  } />
        </Routes>
  );
}

export default App;
