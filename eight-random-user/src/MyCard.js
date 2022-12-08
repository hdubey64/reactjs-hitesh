import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const MyCard = ({ details }) => {
   return (
      <Card>
         <CardBody className="text-center">
            <img
               height="150"
               width="150"
               className="rounded-circle img-thumbnail border-danger"
               src={details.picture?.large}
            />
            <CardTitle className="text-primary">
               <h1>
                  <span className="pe-2">{details.name?.title}</span>
                  <span className="pe-2">{details.name?.first}</span>
                  <span>{details.name?.last}</span>
               </h1>
            </CardTitle>
            <CardText>
               <div className="info">
                  <p className="pe-3">
                     <FaMapMarkedAlt className="me-1" />
                     {details.location?.city}
                  </p>
                  <p className="pe-3">
                     <FaPhone /> {details.phone}
                  </p>
                  <p className="pe-3">
                     DOB :-
                     {details.dob?.date}
                  </p>
                  <p className="pe-3">
                     Age :-
                     {details.dob?.age}
                  </p>
               </div>
            </CardText>
         </CardBody>
      </Card>
   );
};

export default MyCard;
