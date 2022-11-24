import React, { useSate, useContext } from "react";
import { FormGroup, Input, Button, Form, InputGroup, InputG } from "reactstrap";

import { v4 } from "uuid";
import { TodoContext } from "../Context/TodoContext";
import { ADD_TODO } from "../Context/action.types";

const TodoForm = () => {
   return (
      <Form>
         <FormGroup>
            <InputGroup>
               <Input
                  type="text"
                  name="todo"
                  id="todo"
                  placeholder="Your next Todo"
                  // TODO: value. onChange
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
