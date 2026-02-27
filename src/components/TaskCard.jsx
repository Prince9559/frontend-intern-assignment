import "./TaskCard.css";

const TaskCard = ({ title, desc, onDelete }) => {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <p>{desc}</p>

      <button className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default TaskCard;