import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TaskCard from "../components/TaskCard";

const Home = () => {
  const [tasks] = useState([
    { title: "HTML", desc: "Markup structure" },
    { title: "CSS", desc: "Styling and layout" },
    { title: "JavaScript", desc: "Logic handling" },
    { title: "React", desc: "Component based UI" },
  ]);

  return (
    <>
      <Header />

      <main className="container">
        <h2>Frontend Intern Assignment</h2>

        <div className="task-grid">
          {tasks.map((task, index) => (
            <TaskCard
              key={index}
              title={task.title}
              desc={task.desc}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;