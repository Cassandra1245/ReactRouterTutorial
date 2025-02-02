import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Formulario from './Inicio/Formulario';
import Perfil from './Inicio/Perfil';
import Bio from './About/Bio';
import Job from './About/Job';
import ProfesionalTips from './About/ProfesionalTips';
import Achievments from './Cases/Achievments';
import Clients from './Cases/Clients';
import Colaboration from './Cases/Colaboration';
import Call from './Contact/Call';
import Message from './Contact/Message';
import SocialNet from './Contact/SocialNet';
import Layout from './Layout';
import LayoutInicio from './LayoutInicio';
import LayoutAbout from './LayoutAbout';
import LayoutCases from './LayoutCases';
import LayoutContact from './LayoutContact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout />}>

          <Route path="/Start" element={<LayoutInicio />}>
            <Route path="Profile" element={<Perfil />} />
            <Route path="Form" element={<Formulario />} />
          </Route>

          <Route path="/AboutMe" element={<LayoutAbout />}>
            <Route path="Bio" element={<Bio />} />
            <Route path="Job" element={<Job />} />
            <Route path="ProfesionalTips" element={<ProfesionalTips />} />
          </Route>

          <Route path="/Cases" element={<LayoutCases />}>
            <Route path="Achievments" element={<Achievments />} />
            <Route path="Clients" element={<Clients />} />
            <Route path="Colaboration" element={<Colaboration />} />
          </Route>

          <Route path="/Contact" element={<LayoutContact />}>
            <Route path="Call" element={<Call />} />
            <Route path="Message" element={<Message />} />
            {/* No hace nada el parametro porque no le veia el sentido incorporarlo con nada en este programa*/}
            <Route path="SocialNet/:parametro" element={<SocialNet />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
