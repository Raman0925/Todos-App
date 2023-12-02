import ListHeader from "./Components/ListHeader";
import React, { useEffect } from "react";

const App = () => {
  const getData = async () => {
    try {
      const userEmail = "user2@example.com"; // Replace with the actual email or get it dynamically

      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
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
    </div>
  );
};

export default App;
