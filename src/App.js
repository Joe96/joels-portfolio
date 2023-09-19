import { Routes, Route } from 'react-router-dom';
import Welcome from "./pages/Welcome"
import Projects from "./pages/Projects"
import Contacts from "./pages/Contacts"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {

  return (

    <div className="App">
      <Routes>
        <Route path ="/" element={<Welcome/>}/>
        <Route path ="/projects" element={<Projects/>}/>
        <Route path ="/contacts" element={<Contacts/>}/>
      </Routes>
    </div>

  );
  
}

export default App;
