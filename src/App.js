import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import  Productos  from './componentes/Productos';
import  Home  from './componentes/Home';
import  About  from './componentes/About';
import  Layout  from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
	   	    <Route index element={<Home />} />	
   	      <Route path="/productos/:prodId?" element={<Productos />} />
          <Route path="/about" element={<About />} />
   	   </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
