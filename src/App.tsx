import { Header } from "./Components/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contacts/Contact";
import Introduce from "./pages/Introduce/Introduce";
import Project from "./pages/Project/Project";
import Skills from "./pages/Skills/Skills";
import styles from "./styles/App.module.scss";

const links = [
  { url: "#about", title: "About me" },
  { url: "#skills", title: "Skills" },
  { url: "#project", title: "Project" },
  { url: "#contacts", title: "Contacts" },
];

function App() {
  return (
    <div className={styles.page}>
      <Header links={links} />
      <Introduce />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
