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
	console.log(LL.size);
	LL.append("7");
	LL.toString();
	console.log(LL.size);
	LL.prepend("1");
	LL.toString();
	console.log(LL.size);
	LL.append("9");
	LL.toString();
	console.log(LL.size);
	console.log(LL.at(0));
	console.log(LL.at(1));
	console.log(LL.at(2));
    console.log(LL.head)
    console.log(LL.tail)
    console.log(LL.at(LL.size - 2))



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
