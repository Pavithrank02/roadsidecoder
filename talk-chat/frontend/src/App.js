
import './App.css';
import Home from './components/Home';
import ChatPage from './components/ChatPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chats' element={< ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
