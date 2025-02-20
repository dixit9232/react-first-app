import { useEffect, useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import styles from "./Todo.module.css";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [completedTaskList, setCompletedTaskList] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    if (taskList.includes(inputValue)) {
      alert("Task already exists");
      setInputValue("");
      return;
    }
    setTaskList((oldTask) => [...oldTask, inputValue]);
    setInputValue("");
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnCheck = (taskToCheck) => {
    if (completedTaskList.includes(taskToCheck)) {
      return;
    }
    setCompletedTaskList([...completedTaskList, taskToCheck]);
  };

  const handleDelete = (taskToDelete) => {
    setTaskList(taskList.filter((task) => task !== taskToDelete));
  };

  const handleOnClear = () => {
    setTaskList([]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      setDateTime(`${date} - ${time}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${styles.todoSection} text-center`}>
      <header>
        <h1>Todo List</h1>
        <h2 className="mb-3 text-uppercase">{dateTime}</h2>
      </header>

      <div className={styles.form}>
        <form className={styles.inputGroup} onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Add a new task"
            autoComplete="off"
            value={inputValue}
            onChange={handleOnChange}
          />
          <button type="submit" className={styles.submitBtn}>
            Add Task
          </button>
        </form>
      </div>

      <div className={styles.taskContainer}>
        <ul className={styles.taskList}>
          {taskList.map((task, index) => (
            <li key={index} className={styles.task}>
              <span
                className={
                  completedTaskList.includes(task) && styles.taskComplete
                }
              >
                {task}
              </span>
              <div className={styles.taskButtons}>
                {!completedTaskList.includes(task) && (
                  <button
                    className={styles.checkBtn}
                    onClick={() => handleOnCheck(task)}
                  >
                    <MdCheck />
                  </button>
                )}
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(task)}
                >
                  <MdDeleteForever />
                </button>
              </div>
            </li>
          ))}
        </ul>

        {taskList.length > 0 && (
          <button
            className="btn btn-danger text-white px-5 py-3 fs-5"
            onClick={handleOnClear}
          >
            Clear All
          </button>
        )}
      </div>
    </section>
  );
};
