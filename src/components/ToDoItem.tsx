import { ToDoItemInt } from "../models/ToDoItemInt";
import "./ToDoItem.css";

interface ToDoItemProps {
   item: ToDoItemInt;
   deleteToDoHandler: (id: number) => void;
}

export const ToDoItem: React.FC<ToDoItemProps> = (props) => {
   //
   return (
      <li className="to-do-item">
         <span>{props.item.text}</span>
         <button
            className="button-delete"
            onClick={props.deleteToDoHandler.bind(null, props.item.id)}
         >
            DELETE
         </button>
      </li>
   );
};
