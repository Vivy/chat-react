import Chat from '../chat/chat';
import Sidebar from '../sidebar/sidebar';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
