//import { useState } from 'react'
import styles from "./App.module.scss";
import { Header } from "./Components/Header/Header";
import Introduce from './pages/Introduce/Introduce'
//import Loader from './Components/Loader/Loader'

const links = [
  { url: "#", title: "About me" },
  { url: "#", title: "Skills" },
  { url: "#", title: "Project" },
  { url: "#", title: "Contact" },
];

function App() {
  
  return (
    <div className={styles.page}>
      <Header links={links}/>
      <Introduce />
    </div>
  );
}

export default App;
