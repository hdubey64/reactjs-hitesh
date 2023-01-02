import React, { useState, useContext, useEffect } from "react";
import axios, { Axios } from "axios";
import {
   Row,
   Container,
   Col,
   Input,
   Button,
   InputGroup,
   InputGroupAddon,
} from "reactstrap";
import UserCard from "../Components/UserCard";
import Repos from "../Components/Repos";
import { redirect, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";

const Home = () => {
   const context = useContext(UserContext);
   const [query, setQuery] = useState("");
   const [user, setUser] = useState(null);

   const fetchDetails = async () => {
      try {
         const { data } = await axios.get(
            `https://api.github.com/users/${query}`
         );
         setUser(data);
         console.log(data);
      } catch (error) {
         toast("Not able to loacte user", { type: "error" });
      }
   };
   const navigate = useNavigate();
   useEffect(() => {
      if (!context.user?.uid) {
         console.log(context.user);
         return navigate("/signin");
      }
   }, []);
   // Put Anypage behind login

   return (
      <Container>
         <Row className="mt-3">
            <Col md="5">
               <InputGroup>
                  <Input
                     type="text"
                     value={query}
                     onChange={(e) => setQuery(e.target.value)}
                     placeholder="Please provide the username"
                  />

                  <Button onClick={fetchDetails} color="primary">
                     Fetch User
                  </Button>
               </InputGroup>
               {user ? <UserCard user={user} /> : null}
            </Col>
            <Col md="7">
               {user ? <Repos repos_url={user.repos_url} /> : null}
            </Col>
         </Row>
      </Container>
   );
};

export default Home;
