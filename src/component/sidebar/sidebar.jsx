import Chats from '../chats/chats';
import Navbar from '../navbar/navbar';
import Searchbar from '../searchbar/searchbar';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar />
      <Searchbar />
      <Chats />
    </div>
  );
};

export default Sidebar;
