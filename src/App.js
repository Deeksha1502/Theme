import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from './theme-context';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
