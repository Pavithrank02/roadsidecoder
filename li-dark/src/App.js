import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import About from './pages/About';
import Blog from './pages/Blog';
import { ThemeProvider } from './ThemeContextApi';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/abouts' element={<About />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
