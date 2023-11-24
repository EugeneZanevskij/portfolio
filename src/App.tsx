import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App