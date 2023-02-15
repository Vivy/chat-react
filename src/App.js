import Home from './component/pages/home';
import Login from './component/pages/login';
import Register from './component/pages/register';
import './style.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './component/context/context';

const App = () => {

  const { currentUser } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }
    return children
  }
  console.log(currentUser)


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
