import React, { useEffect, useState } from "react";
import ListHeader from "./Components/ListHeader";
import Listitem from "./Components/Listitem";

const App = () => {
  const userEmail = "user2@example.com";
  const [tasks, setTasks] = useState([]); // Initialize tasks as an empty array

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []); // Pass an empty dependency array to run the effect only once when the component mounts

  // Use optional chaining (?.) to handle cases where tasks is null or undefined
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date)) || [];

  return (
    <div className="app">
      <ListHeader ListName={"Holiday Tick List"} />
      {sortedTasks.map((task) => (
        <Listitem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default App;
