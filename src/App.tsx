//import { useState } from 'react'
import styles from "./App.module.scss";
import { Header } from "./Components/Header/Header";
import About from './pages/About/About'
import Introduce from './pages/Introduce/Introduce'
import Project from './pages/Project/Project'
import Skills from './pages/Skills/Skills'
//import Loader from './Components/Loader/Loader'

const links = [
  { url: "#about", title: "About me" },
  { url: "#skills", title: "Skills" },
  { url: "#project", title: "Project" },
  { url: "#", title: "Contacts" },
];

function App() {
  
  return (
    <div className={styles.page}>
      <Header links={links}/>
      <Introduce />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
