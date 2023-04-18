import React from 'react';
import './App.css';
import Home from './pages/Home';
import Events from "./pages/events";
import About from "./pages/about";
import Members from "./pages/members";
import Projects from "./pages/projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Footer from './components/footer';
import Contact from './pages/contact';

import theme from "./design/theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
