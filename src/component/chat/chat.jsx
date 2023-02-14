import {
  AiOutlineUserAdd,
  AiOutlineVideoCamera,
  AiOutlineMore,
} from 'react-icons/ai';
import Input from '../input/input';
import Messages from '../messages/messages';

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Gigel</span>
        <div className='chatIcons'>
          <AiOutlineUserAdd />
          <AiOutlineVideoCamera />
          <AiOutlineMore />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
