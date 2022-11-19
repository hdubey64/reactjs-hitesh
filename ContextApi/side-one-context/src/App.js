import React, { Fragment } from "react";
import Provider from "./Provider";
import Context from "./Context";

const Agents = () => {
   return <AgentOne />;
};

const AgentOne = () => {
   return <AgentTwo />;
};

const AgentTwo = () => {
   return <AgentBond />;
};

const AgentBond = () => {
   return (
      <Context.Consumer>
         {(Context) => (
            <Fragment>
               <h3> Agent Information</h3>
               <p> Mission Name: {Context.data.mname} </p>
               <h2>Mission Status:{Context.data.accept} </h2>
               <button onClick={Context.isMissionAccepted}>
                  {" "}
                  Choose to accept
               </button>
            </Fragment>
         )}
      </Context.Consumer>
   );
};

const App = () => {
   return (
      <div>
         <h1>Context Api</h1>
         <Provider>
            <Agents />
         </Provider>

         <p>Hello</p>
      </div>
   );
};

export default App;
