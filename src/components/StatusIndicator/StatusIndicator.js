import "./index.css";

const StatusIndicator = ({ isActive }) =>
  isActive ? <div className="status-indicator">Chatbot is typing...</div> : <></>;

export default StatusIndicator;
