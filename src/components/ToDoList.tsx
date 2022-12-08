import { ToDoItemInt } from "../models/ToDoItemInt";
import { ToDoItem } from "../components/ToDoItem";
import "../components/ToDoList.css";

interface ToDoListProps {
   items: ToDoItemInt[];
   onDelete: (id: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = (props) => {
   return (
      <ol className="to-do-list">
         {props.items.map((item) => (
            <ToDoItem
               key={item.id}
               item={item}
               deleteToDoHandler={props.onDelete}
            />
         ))}
      </ol>
   );
};

export default ToDoList;
