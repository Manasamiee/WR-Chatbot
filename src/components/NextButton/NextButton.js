import "./index.css";

const NextButton = ({ action }) => {
  let messageClass = 'message';

  return (
    <button className="summariser-btn" onClick={action}>Next</button>
  );
}

export default NextButton;