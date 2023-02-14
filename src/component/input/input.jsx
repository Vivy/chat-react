import { GrAttachment } from 'react-icons/gr';
import { SlPicture } from 'react-icons/sl';

const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Text the message here' id='' />
      <div className='send'>
        <GrAttachment />
        <input type='file' style={{ display: 'none' }} id='send-file' />
        <label htmlFor='send-file'>
          <SlPicture />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
