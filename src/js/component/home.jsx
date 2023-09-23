import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("");
	const [todoList, setTodoList] = useState([]);

	// function to add the todo

	function addTodo(e) {
		// let newTodoList = todoList;
		// newTodoList.push(inputValue);
		// setTodoList(newTodoList)
		if (e.key === "Enter" && inputValue !== "") {

			setTodoList(todoList.concat(inputValue));
			setInputValue("")
		};
		console.log(todoList)
	}

	// Delete todo
	function deleteTodo(index) {
		setTodoList(todoList.filter((item, idx) => index !== idx));

	};
	return (
		<div className="container">
			<h1 className="text-center">Todo List</h1>
			<div className="me-100">
				<input className="mx-auto" onChange={e => setInputValue(e.target.value)} value={inputValue} onKeyPress={e => addTodo(e)} type="text" placeholder="type your todo" />
			</div>
			<div>
				<ul className="container">
					{todoList.map((item, index) => {
						return (
							<li className="navbar" key={index}>
								<p>{item}</p>
								<i className="fa-regular fa-trash-can text-danger" onClick={() => deleteTodo(index)}></i>

							</li>
						)
					})}
				</ul>

			</div>

		</div>
	);
};

export default Home;