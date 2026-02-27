import "./TaskCard.css";

const TaskCard = ({ title, desc }) => {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default TaskCard;