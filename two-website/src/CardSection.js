import React from "react";
import Card from "./Card";

const CardSection = () => {
   return (
      <section class="contact bg-success ">
         <div class="container ">
            <h2 class="text-white">
               Commited to People, Commited to the Future !
            </h2>
            <div class="row m-auto">
               <div class="col-sm-12 col-md-4 p-2">
                  <Card
                     title="UI/UX Design"
                     saySomthing="Great online experiences happen only when a well planned UX strategy is visualized with top class design aesthetics; and we do it best"
                     buttonText="Our Design"
                     img="https://xparticle.in/assets/images/uiuxdesign.svg"
                  />
               </div>
               <div class="col-sm-12 col-md-4 p-2">
                  <Card
                     title="Web Development"
                     saySomthing="We have dedicated team of professional designers and developers, creating powerful and engaging websites. We believe that a good online presence starts with a great website"
                     buttonText="Projects"
                     img="https://xparticle.in/assets/images/webApps.svg"
                  />
               </div>
               <div class="col-sm-12 col-md-4 p-2">
                  <Card
                     title="Mobile App"
                     saySomthing="If you are looking for a mobile application to be created, then we are the company to help you. We offers comprehensive mobility solutions, developing customized mobile apps for each business"
                     buttonText="Our App"
                     img="https://xparticle.in/assets/images/appDevelopment.svg"
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default CardSection;
