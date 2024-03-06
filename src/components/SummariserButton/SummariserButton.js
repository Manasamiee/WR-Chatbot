import "./index.css";

const SummariserButton = ({ action }) => {
  let messageClass = 'message';

  return (
    <button className="summariser-btn" onClick={action}>SUMMARISE</button>
  );
}

export default SummariserButton;
