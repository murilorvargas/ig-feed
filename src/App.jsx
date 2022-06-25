import { Header } from "./components/Header";
import Sidebar from "./components/Sidebar";

import styles from "./styles/App.module.css";

import "./styles/global.css";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
