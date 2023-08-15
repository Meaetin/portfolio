import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar.js';
import About from './pages/about';
import Main from './pages/main';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
