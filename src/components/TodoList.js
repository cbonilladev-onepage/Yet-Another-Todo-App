import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './TodoList.css';

function TodoList() {
	const [todos, setTodos] = useState([])

	const addTodo = todo => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return
		}

		const newTodos = [...todos, todo]

		setTodos(newTodos)
	}


	const updateTodo = (todoId, newValue) => {
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return
		}

		setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
	}

	const removeTodo = id => {
		const removeArr = [...todos].filter(todo => todo.id !== id)

		setTodos(removeArr);
	}

	const completeTodo = id => {
		let updatedTodos = todos.map(todo => {
			console.log(todo)
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		})
		setTodos(updatedTodos);
	}

	return (
		<div className="container">
			<div className="box">
				<h1 className="title">Today's Todos:</h1>
				<TodoForm onSubmit={addTodo} class="todoform"/>
				<Todo
					todos={todos}
					completeTodo={completeTodo}
					removeTodo={removeTodo}
					updateTodo={updateTodo}
				/>
			</div>
		</div>
	)
}

export default TodoList
