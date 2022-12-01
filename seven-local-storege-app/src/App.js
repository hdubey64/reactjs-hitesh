import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todos from "./Components/Todos";

const App = () => {
   const [todos, setTodos] = useState([]);

   return (
      <Container fluid>
         <h1>Todo With Local Storege</h1>
         <Todos />
      </Container>
   );
};

export default App;
