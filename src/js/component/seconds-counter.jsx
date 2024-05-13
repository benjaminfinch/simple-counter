import React from "react";
import SecondSquare from "./second-square.jsx";

const SecondsCounter = ({ seconds }) => {
   console.log(seconds.toString().replace('.', ''));
   console.log(seconds.toString().replace('.', '').split(''));


   const secondsArray = seconds.toString().replace('.', '').split('');
   return (
      <div className="d-flex justify-content-between p-5">
         <SecondSquare icon={true} />
         <SecondSquare second={secondsArray[0] || 0} />
         <SecondSquare second={secondsArray[1] || 0} />
         <SecondSquare second={secondsArray[2] || 0} />
         <SecondSquare second={secondsArray[3] || 0} />
         <SecondSquare second={secondsArray[4] || 0} />
         <SecondSquare second={secondsArray[5] || 0} />
      </div>
   );
};

export default SecondsCounter;
