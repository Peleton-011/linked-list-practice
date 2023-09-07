import { useState } from "react";
import "./App.css";
import ControlPanel from "./components/ControlPanel";
import LinkedList from "./LinkedList";

function App() {
	function setAnswer(ans) {
		console.log(ans);
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
	console.log(LL.head);
	console.log(LL.tail);
	console.log(LL.at(LL.size - 2));

	const controlPanelData = {
		functionList: [
			{
				func: (input) => {
					LL.append(input);
					return LL.toString();
				},
				funcName: "append",
				inputName: "",
			},
			{
				func: (input) => {
					LL.prepend(input);
					return LL.toString();
				},
				funcName: "prepend",
				inputName: "",
			},
			{
				func: (input) => {
					return LL.size;
				},
				funcName: "size",
				inputName: "",
			},
			{
				func: (input) => {
					return LL.head;
				},
				funcName: "head",
				inputName: "",
			},
			{
				func: (input) => {
					return LL.tail;
				},
				funcName: "tail",
				inputName: "",
			},
			{
				func: (input) => {
					return LL.at(input);
				},
				funcName: "at",
				inputName: "",
			},
			{
				func: (input) => {
					LL.pop();
					return LL.toString();
				},
				funcName: "pop",
				inputName: "",
			},
			{
				func: (input) => {
					return LL.contains(input);
				},
				funcName: "contains",
				inputName: "",
			},
			{
				func: (input) => {
					return LL.find(input);
				},
				funcName: "find",
				inputName: "",
			},
			{
				func: (input) => {
					const [val, index] = input.split(",");
					LL.insertAt(val, index);
					return LL.toString();
				},
				funcName: "insertAt",
				inputName: "",
			},
			{
				func: (input) => {
					LL.removeAt(input);
					return LL.toString();
				},
				funcName: "removeAt",
				inputName: "",
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
