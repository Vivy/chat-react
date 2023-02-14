const Searchbar = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a user' />
      </div>
      <div className='userChat'>
        <img
          src='https://images.pexels.com/photos/14589717/pexels-photo-14589717.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          alt=''
        />
        <div className='userChatInfo'>
          <span>GIgeL</span>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;