import { GoTrash, GoCircle, GoCheckCircle } from "react-icons/go";
import { useState } from "react";
import "./Task.css";

const Task = ({ index, item, removeTask, onToggleConcluded }) => {
  const [concluded, setConcluded] = useState(false);

  const toggleConcluded = () => {
    setConcluded(!concluded);
    onToggleConcluded(1)
  };

  return (
    <li>
      <button
        onClick={toggleConcluded}
        className={concluded ? "concluded" : "not-concluded"}
      >
        {concluded ? <GoCheckCircle /> : <GoCircle />}
      </button>
      <p style={{ textDecoration: concluded ? "line-through" : "none" }}>{item}</p>
      <button onClick={() => removeTask(index)} className="trash">
        <GoTrash />
      </button>
    </li>
  );
};

export default Task;
