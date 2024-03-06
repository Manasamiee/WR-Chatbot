import "./index.css";

function Message({ children, sender }) {
  let messageClass = 'message';

  if(sender === 'ChatGPT') {
    messageClass += ' chatgpt'
  } else {
    messageClass += ' user'
  }

  return (
    <div className="message-wrapper" style={{textAlign: sender === 'user' ? 'right' : 'left'}}>
      <div className={messageClass}>
        {children}
      </div>
    </div>
  );
}

export default Message;
