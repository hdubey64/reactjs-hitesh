import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { TodoContext } from "./Context/TodoContext";
import todoReducer from "./Context/reducer";
import TodoForm from "./Components/TodoForms";
import Todos from "./Components/Todos";

const App = () => {
   const [todos, dispatch] = useReducer(todoReducer, []);
   return (
      <div>
         <TodoContext.Provider value={{ todos, dispatch }}>
            <Container fluid>
               <div className="pic">
                  <img src="" alt="" />
               </div>
               <h1>Todo App With Context API</h1>
               <Todos />
               <TodoForm />
            </Container>
         </TodoContext.Provider>

         <section></section>
      </div>
   );
};

export default App;
