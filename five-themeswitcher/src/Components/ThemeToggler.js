import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
   const [themeMode, setThmeMode] = useContext(ThemeContext);

   return (
      <div
         onClick={() => {
            setThmeMode(themeMode === "light" ? "dark" : "light");
         }}
      >
         <span>
            {" "}
            {themeMode === "light"
               ? "Switch to Dark Theme"
               : "Switch To Light Theme"}{" "}
         </span>
      </div>
   );
};

export default ThemeToggler;
