
import Settings from "./Settings"
import {Routes , Route} from "react-router-dom"

function App() {
  return (
    
       <Routes>
            <Route path='/' element={  <Settings/>  } />
            <Route path='/a' element={  <Settings/>  } />
        </Routes>
  );
}

export default App;
