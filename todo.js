const todoForm = document.getElementById('todoForm');
const todoInput = document.querySelector('#todoForm input[type=text]');
const todoList = document.getElementById('todoList');

let todos = [];
const storedTodos = localStorage.getItem('todo');

const addTodo = (e) => {
	e.preventDefault();
	const todoText = todoInput.value.trim();
	if (todoText === '') return;

	const newTodo = { text: todoText, id: Date.now() };
	todos.push(newTodo);
	updateTodoList();
	renderTodo(newTodo);
	todoInput.value = "";
};

const updateTodoList = () => {
	localStorage.setItem('todo', JSON.stringify(todos));
};

const deleteTodo = (e) => {
	const liToDelete = e.target.parentNode;
	liToDelete.remove();
	todos = todos.filter(todo => todo.id !== parseInt(liToDelete.id));
	updateTodoList();
};

const renderTodo = (todo) => {
	const li = document.createElement('li');
	li.id = todo.id;
	const span = document.createElement('span');
	const deleteButton = document.createElement('button');
	deleteButton.innerText = "❌";
	deleteButton.addEventListener('click', deleteTodo);
	span.innerText = todo.text;
	li.append(span, deleteButton);
	todoList.appendChild(li);
};

todoForm.addEventListener('submit', addTodo);

if (storedTodos !== null) {
	todos = JSON.parse(storedTodos);
	todos.forEach(renderTodo);
}