import React, { useContext, useState, useEffect } from "react";
import {
   FormGroup,
   Input,
   Button,
   Form,
   InputGroup,
   Container,
} from "reactstrap";

import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
   const [todoString, setTodoString] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      if (todoString === "") {
         return "Plese Fill Some Value";
      }
      const todo = {
         todoString,
         id: v4(),
      };
      addTodos();
      setTodoString("");
   };

   return (
      <Form onSubmit={handleSubmit}>
         <FormGroup>
            <InputGroup className="input">
               <Input
                  type="text"
                  name="todo"
                  id="todo"
                  placeholder="Enter a ToDo string"
                  value={todoString}
                  onChange={(e) => setTodoString(e.target.value)}
               />
               <Button
                  color="success"
                  //TODO: onClick
               >
                  Add Todo
               </Button>
            </InputGroup>
         </FormGroup>
      </Form>
   );
};

export default TodoForm;
