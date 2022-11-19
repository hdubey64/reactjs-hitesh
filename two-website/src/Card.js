import React from "react";

const Card = ({
   title = "Basketball",
   buttonText = "My Button",
   saySomthing = "Give a me Para",
   img = "",
}) => {
   return (
      <div className="card m-auto" style={{ width: " 18rem", height: "100%" }}>
         <img
            src={img}
            className="card-img-top"
            style={{ padding: 10, width: 300, height: 200 }}
            alt="..."
         />
         <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{saySomthing}</p>
            <a href="#" className="btn btn-success">
               {buttonText}
            </a>
         </div>
      </div>
   );
};

export default Card;
