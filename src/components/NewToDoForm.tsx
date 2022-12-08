import { useRef } from "react";
import "../components/NewToDoForm.css";

const NewToDoForm: React.FC<{ onAdd: (text: string) => void }> = (props) => {
   // initialize useRef for user Input
   const userInput = useRef<HTMLInputElement>(null);

   // submit Form Handler
   const submitHandler = (event: React.FormEvent) => {
      event.preventDefault();

      const enteredText = userInput.current!.value;
      if (enteredText.trim().length > 1) {
         props.onAdd(enteredText);
      } else {
         alert("Please enter a valid / non-empty text!");
         return;
      }
   };

   //
   return (
      <form className="new-to-do-form" onSubmit={submitHandler}>
         <label htmlFor="textInput">New ToDo: </label>
         <input
            type="text"
            id="textInput"
            placeholder="add your new ToDo here"
            ref={userInput}
         />
         <button type="submit">Add new ToDo</button>
      </form>
   );
};

export default NewToDoForm;
