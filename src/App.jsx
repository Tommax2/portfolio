import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { NavBar } from './assets/Components/NavBar';
import { Banner} from './assets/Components/Banner';
import { Skill } from './assets/Components/Skill';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './assets/Components/Projects';
import { Footer } from './assets/Components/Footer';
import { Contact } from './assets/Components/Contact'


function App() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <Skill/>
      <Projects/>
      <Contact/>
      <Footer/>
    
   
    </>
  )
}

export default App
