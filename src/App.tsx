import { Header } from "./Components/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contacts/Contact";
import Introduce from "./pages/Introduce/Introduce";
import Project from "./pages/Project/Project";
import Skills from "./pages/Skills/Skills";
import { useSelector } from "./store/store";
import styles from "./styles/App.module.scss";

function App() {
  const links = useSelector((state) => state.contentReducer.header);

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
