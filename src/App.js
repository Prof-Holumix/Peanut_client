import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Friends from './pages/Friends';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tasks' element={<Tasks />} />
      <Route path='/friends' element={<Friends />} />
    </Routes>
  );
}

export default App;
