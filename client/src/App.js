import ListHeader from "./Components/ListHeader";
import Listitem from "./Components/Listitem"
import React, { useEffect,useState } from "react";

const App = () => {
  const userEmail = "user2@example.com"; 
  const {tasks, setTasks} = useState(null)
  const getData = async () => {
    try {
    // Replace with the actual email or get it dynamically

      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
     setTasks(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []); // Pass an empty dependency array to run the effect only once when the component mounts

  return (
    <div className="app">
      <ListHeader ListName={"Holiday Tick List"} />
      {sortedTasks.map((task) => <Listitem key = {task.id} task ={task}/>)}
    </div>
  );
};

export default App;
