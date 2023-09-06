import React, { useState, useEffect } from "react";

const Input = ({func, funcName, inputName, inputID, setAnswer}) => {
	return (
		<div className="inputWrapper">
			<label htmlFor={inputID}>{inputName}</label>
			<input type="text" id={inputID} />
			<button
				onClick={(e) => {
					setAnswer(
						func(e.parentElement.querySelector("input").value)
					);
				}}
			>
				Calculate
			</button>
s		</div>
	);
};

export default Input;
