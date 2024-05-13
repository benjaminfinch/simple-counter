import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const SecondSquare = ({ second, icon }) => {
  return (
    <p
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: '1px solid black',
        borderRadius: '20px',
        textAlign: 'center',
        width: '100px',
        height: '200px',
        fontSize: '50px'
      }}
    >
      {icon ? (<FontAwesomeIcon icon={faClock} />) : second}
    </p>
  );
};

export default SecondSquare;
