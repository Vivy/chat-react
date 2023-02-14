const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img
          src='https://images.pexels.com/photos/5044316/pexels-photo-5044316.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          alt=''
        />
        <span>the time</span>
      </div>
      <div className='messageContent'>
        <p>the message</p>
        {/* <img
          src='https://images.pexels.com/photos/5044316/pexels-photo-5044316.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          alt=''
        /> */}
      </div>
    </div>
  );
};

export default Message;
