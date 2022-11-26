import React, { useContext, useState, useEffect } from "react";
import { FormGroup, Input, Button, Form, InputGroup } from "reactstrap";

import { v4 } from "uuid";
import { TodoContext } from "../Context/TodoContext";
import { ADD_TODO } from "../Context/action.types";

const TodoForm = () => {
   const [todoString, setTodoString] = useState("");
   const { dispatch, todos } = useContext(TodoContext);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (todoString === "") {
         return "Plese Enter A Todo";
      }
      const todo = {
         todoString,
         id: v4(),
      };

      console.log("log: todo", todo);

      dispatch({
         type: ADD_TODO,
         payload: todo,
      });
      console.log("log: hello");
      setTodoString("");
   };

   useEffect(() => {
      console.log("log: todos", todos);
   }, [todos]);

   return (
      <Form onSubmit={handleSubmit}>
         <FormGroup>
            <InputGroup className="input">
               <Input
                  type="text"
                  name="todo"
                  id="todo"
                  placeholder="Your next Todo"
                  value={todoString}
                  onChange={(e) => setTodoString(e.target.value)}
               />
               <Button
                  color="warning"
                  //TODO: onClick
               >
                  Add
               </Button>
            </InputGroup>
         </FormGroup>
      </Form>
   );
};

export default TodoForm;
