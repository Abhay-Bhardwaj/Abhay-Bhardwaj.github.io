// import logo from './logo.svg';

import './App.css';
import { useState } from "react";
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import { Projects } from './components/Projects';
import{Contact} from './components/Contact'
import ProjectDetails from "./components/ProjectDetails";
import Eduaction from "./components/Education"
import Footer from "./components/Footer"



import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
      <Eduaction/>
      <Contact/>
      <Footer/>

      {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }

    </div>
  );
}

export default App;
