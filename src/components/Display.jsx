import React from "react";
import "./Display.css";

const Display = (props) => {
    const regex = new RegExp("^0+(?!$)",'g');
    const display = props.displayNumber.replace(regex, '');

  	return (
	      <div id='divDisplay'>
        	<textarea id='outDisplay' readOnly>{display}</textarea>
      	</div>
	)

}

export default Display;
