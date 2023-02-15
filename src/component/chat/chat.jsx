import { useContext } from 'react';
import {
  AiOutlineUserAdd,
  AiOutlineVideoCamera,
  AiOutlineMore,
} from 'react-icons/ai';
import { ChatContext } from '../context/chatcontext';
import Input from '../input/input';
import Messages from '../messages/messages';

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
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
