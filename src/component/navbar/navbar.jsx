import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { auth } from '../../firebase';
import { AuthContext } from '../context/context';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className='navbar'>
      <span className='logo'>ChatMe</span>
      <div className='user '>
        <img src={currentUser.photoURL} alt='user' />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
