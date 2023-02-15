import Home from './component/pages/home';
import Login from './component/pages/login';
import Register from './component/pages/register';
import './style.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
