import { Route, Routes } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import { Button } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/chat' element={< Chats />} />
      </Routes>
    </div>
  );
}

export default App;
