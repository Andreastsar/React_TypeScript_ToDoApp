import { useState } from "react";
import ToDoList from "./components/ToDoList";
import NewToDoForm from "./components/NewToDoForm";
import { ToDoItemInt } from "./models/ToDoItemInt";

const App = () => {
   // Initial state for ToDoList items
   const [todos, setTodos] = useState<ToDoItemInt[]>([
      { id: 1, text: "React With TypeScript" },
   ]);

   // Add a new ToDo item handler
   const addNewToDoHandler = (text: string) => {
      setTodos((prev) => [
         ...prev,
         { id: Math.floor(Math.random() * 1000) + 1, text: text },
      ]);
   };

   // Remove a ToDo item handler
   const onRemoveToDoHandler = (id: number) => {
      setTodos((prev) => {
         return prev.filter((todo) => todo.id !== id);
      });
   };

   // return
   return (
      <div>
         <h1>My ToDo List</h1>
         <NewToDoForm onAdd={addNewToDoHandler} />
         <ToDoList items={todos} onDelete={onRemoveToDoHandler} />
      </div>
   );
};

export default App;
