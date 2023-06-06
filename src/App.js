import { useRef } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Layout from 'Module/Main/Layout'
import Home from 'Module/Main/Pages/Home'
import { ThemeProvider } from '@mui/material/styles'
import classicLight from 'theme/classicLight'
export default function App() {
  const homeRef=useRef(null)
  const aboutRef=useRef(null)
  const serviceRef=useRef(null)
  const contactRef=useRef(null)


  return (
    <ThemeProvider theme={classicLight}>
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Layout homeRef={homeRef} aboutRef={aboutRef}  serviceRef={serviceRef}  contactRef={contactRef}  />}>
        <Route index element={<Home  homeRef={homeRef} aboutRef={aboutRef}  serviceRef={serviceRef}  contactRef={contactRef} />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  </ThemeProvider>
  );
}