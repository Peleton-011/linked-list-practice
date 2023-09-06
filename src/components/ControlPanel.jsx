import React, { useEffect, useState } from "react";

import Input from "./Input";

const ControlPanel = ({ functionList }) => {

    function setAnswer() {
        
    }

	return (
		<>
			<div>ControlPanel</div>;
			<div>
				{functionList.forEach(({func, funcName, inputName}) => {
					<Input
						props={{
							func,
							funcName,
							inputName,
							inputID: inputName,
							setAnswer,
						}}
					/>;
				})}
			</div>
		</>
	);
};

export default ControlPanel;
