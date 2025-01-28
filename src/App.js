import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Formulario from './componentes/Formulario';
import Perfil from './componentes/Perfil';
import Bio from './About/Bio';
import Job from './About/Job';
import ProfesionalTips from './About/ProfesionalTips';
import Achievments from './Cases/Achievments';
import Clients from './Cases/Clients';
import Colaboration from './Cases/Colaboration';
import LayoutInicio from './LayoutInicio';
import LayoutAbout from './LayoutAbout';
import LayoutCases from './LayoutCases';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<LayoutInicio />} >
          <Route path="/Formulario/" element={<Formulario />} />
          <Route path="/perfil" element={<Perfil />} />
        </Route>

        <Route path="/" element={<LayoutAbout />} >
          <Route path="/Bio" element={<Bio />} />
          <Route path="/Job" element={<Job />} />
          <Route path="/ProfesionalTips" element={<ProfesionalTips />} />
        </Route>

        <Route path="/" element={<LayoutCases />} >
          <Route path="/Achievments" element={<Achievments />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Colaboration" element={<Colaboration />} />
        </Route>

      </Routes>
    </BrowserRouter>

  );
}
export default App;
