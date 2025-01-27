import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Formulario from './componentes/Formulario';
import Home from './componentes/Home';
import Perfil from './componentes/Perfil';
import Bio from './About/Bio';
import Job from './About/Job';
import ProfesionalTips from './About/ProfesionalTips';
import LayoutInicio from './LayoutInicio';
import LayoutAbout from './LayoutAbout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<LayoutInicio />} >
          <Route index element={<Home />} />
          <Route path="/Formulario/" element={<Formulario />} />
          <Route path="/perfil" element={<Perfil />} />
        </Route>

        <Route path="/" element={<LayoutAbout />} >
          <Route path="/Bio" element={<Bio />} />
          <Route path="/Job" element={<Job />} />
          <Route path="/ProfesionalTips" element={<ProfesionalTips />} />
        </Route>

      </Routes>
    </BrowserRouter>

  );
}
export default App;
