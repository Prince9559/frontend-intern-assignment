import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TaskCard from "../components/TaskCard";

const Home = () => {
  const [tasks, setTasks] = useState([
    { title: "HTML", desc: "Markup structure" },
    { title: "CSS", desc: "Styling and layout" },
  ]);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return alert("Fill all fields");

    setTasks([...tasks, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <Header />

      <main className="container">
        <h2>Frontend Intern Assignment</h2>

        <form onSubmit={handleSubmit} className="task-form">
          <input
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder="Task Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button>Add Task</button>
        </form>

        <div className="task-grid">
          {tasks.map((task, index) => (
            <TaskCard
              key={index}
              title={task.title}
              desc={task.desc}
              onDelete={() => deleteTask(index)}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;