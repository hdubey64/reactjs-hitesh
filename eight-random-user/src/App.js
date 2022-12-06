import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Axios from "axios";

function App() {
   const [details, setDetails] = useState({});

   const fetchDetails = async () => {
      const response = await Axios.get("https://randomuser.me/api/");
      console.log("RESPONSE", response);
   };

   useEffect(() => {}, []);

   return (
     //
   );
}

export default App;
