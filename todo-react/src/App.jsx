import Task from "./components/Task";
import { useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState([]);
  const [contTasks, setContTasks] = useState(0);
  const [taskCompleted, setTaskCompleted] = useState(0);
  const [taskDeleted, setTasksDeleted] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() !== "") {
      setListTasks([...listTasks, task]);
      setTask("");
      setContTasks(contTasks + 1);
    }
  };

  const handleRemoveTask = (index) => {
    setListTasks(listTasks.filter((element, i) => i !== index));
    setTasksDeleted(taskDeleted + 1);
  };

  const handleConcluded = (result) => {
    setTaskCompleted(taskCompleted + result);
  };

  return (
    <>
      <header>
        <h1 className="to">to</h1>
        <h1 className="do">do</h1>
      </header>
      <main>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Adicione uma nova tarefa"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">
              Criar <GoPlusCircle />
            </button>
          </form>
        </div>

        <div className="box-title-tasks">
          <div className="created-tasks">
            <p>Tarefas criadas</p>
            <span className="totalTasks">{contTasks}</span>
          </div>

          <div className="completed-tasks">
            <p>Concluídas</p>
            <span className="completedTasks">
              {taskCompleted} de {contTasks}
            </span>
          </div>

          <div className="deleted-tasks">
            <p>Deletadas</p>
            <span className="deletedTasks">{taskDeleted}</span>
          </div>
        </div>

        <div>
          <ul className="containerTasks">
            {listTasks.map((item, index) => (
              <Task
                key={index}
                item={item}
                handleRemoveTask={() => handleRemoveTask(index)}
                handleConcluded={handleConcluded}
                contTasks={contTasks}
                taskCompleted={taskCompleted}
              />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
