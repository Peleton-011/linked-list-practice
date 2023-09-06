import { useState } from "react";
import "./App.css";
import ControlPanel from "./components/ControlPanel";
import LinkedList from "./LinkedList";

function App() {
	function setAnswer() {
		console.log("ass");
	}

	const LL = new LinkedList();

	LL.toString();
	LL.append("7");
	LL.toString();
	LL.append("1");
	LL.toString();
	LL.append("9");
	LL.toString();

	const controlPanelData = {
		functionList: [
			{
				func: (name) => `Hello, ${name}!`,
				funcName: "hello",
				inputName: "name",
			},
			{
				func: (name) => `Bye, ${name}!`,
				funcName: "bye",
				inputName: "name",
			},
		],
		setAnswer,
	};
	return (
		<>
			<h1>Henlo</h1>
			<ControlPanel data={controlPanelData} />
		</>
	);
}

export default App;
