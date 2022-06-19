import React from "react";
import Display from "./components/Display";
import "./Calculator.css";

function Calculator() {
  return (
        <>
          <div className='calculator-body'>
            <Display displayNumber='0'/>

          </div>

        </>
      
      );
}

export default Calculator;
