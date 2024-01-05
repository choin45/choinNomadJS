

const todoForm = document.getElementById('todoForm');
const todoFromInput = document.querySelector('#todoForm input[type=text]');
const todoList = document.getElementById('todoList');





let toDos = [];
let todoGet = localStorage.getItem('todo')
/* if(todoGet){
	toDos = JSON.parse(todoGet)
	console.log('1')
}else{
	toDos = [];
	console.log('2')
} */


const todoSubmitFn=(e)=>{

	e.preventDefault();
	let newTodo = todoFromInput.value;

    if(newTodo !== ''){
        todoFromInput.value=""
	
        const newTodoObj = {
            text : newTodo,
            id : Date.now()
        }
        printTodo(newTodoObj);
        toDos.push(newTodoObj);
        todoSetItem();
    }
}

const todoSetItem = (e) => {
	localStorage.setItem('todo', JSON.stringify(toDos))
	
}

const deleteTodo = (e) => {
	const parentLi = e.target.parentNode;    
	parentLi.remove();
    toDos = toDos.filter(toDo => toDo.id !== Number(parentLi.id))
    todoSetItem()
}



const printTodo = (todoValue) => {
	const li = document.createElement('li');
    li.id = todoValue.id;
	const span = document.createElement('span');
	const btn = document.createElement('button');
	btn.innerText = "❌";
	span.innerText = todoValue.text;
	li.appendChild(span);
	li.appendChild(btn);
	todoList.appendChild(li);

	btn.addEventListener('click', deleteTodo);
}





todoForm.addEventListener('submit',todoSubmitFn )

if( todoGet !== null ){
	const parsedTodos = JSON.parse(todoGet);
	toDos = parsedTodos;
	parsedTodos.forEach(printTodo)
}