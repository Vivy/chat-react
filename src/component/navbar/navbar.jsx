const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>ChatMe</span>
      <div className='user '>
        <img
          src='https://images.pexels.com/photos/14589717/pexels-photo-14589717.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          alt='user'
        />
        <span>username</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
