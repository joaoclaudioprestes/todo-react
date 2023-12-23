import { GoTrash, GoCircle, GoCheckCircle } from "react-icons/go";
import { useState } from "react";
import "./Task.css";

const Task = ({
  index,
  item,
  handleRemoveTask,
  handleConcluded,
  contTasks,
  taskCompleted,
}) => {
  const [concluded, setConcluded] = useState(false);

  const toggleConcluded = () => {
    setConcluded(!concluded);
    if (!concluded && taskCompleted < contTasks) {
      handleConcluded(1);
    }
  };

  return (
    <li>
      <button
        onClick={toggleConcluded}
        className={concluded ? "concluded" : "not-concluded"}
      >
        {concluded ? <GoCheckCircle /> : <GoCircle />}
      </button>
      <p style={{ textDecoration: concluded ? "line-through" : "none" }}>
        {item}
      </p>
      <button
        onClick={() => {
          handleRemoveTask(index);
          if (concluded) {
            setConcluded(!concluded);
          }
        }}
        className="trash"
      >
        <GoTrash />
      </button>
    </li>
  );
};

export default Task;
