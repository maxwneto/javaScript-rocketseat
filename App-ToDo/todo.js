let listElement = document.querySelector('#app ul')
let inputElement = document.querySelector('#app input')
let btnElement = document.querySelector('#app button')

let todos = JSON.parse(localStorage.getItem('list_todos')) ||[]

function renderTodos(){
    listElement.innerHTML = '' //limpa o conteúdo afim de não ter itens repetidos

    for (todo of todos){
        let todoElement = document.createElement('li')
        let todoText = document.createTextNode(todo)

        let linkElement = document.createElement('a')

        linkElement.setAttribute('href','#')

        let pos = todos.indexOf(todo)//todo é o valor atual do loop
        linkElement.setAttribute('onclick','deleteTodo(' + pos + ')')

        let linkText = document.createTextNode('Excluir')

        linkElement.appendChild(linkText)   
        
        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}

renderTodos()

function addTodo(){
    var todoText = inputElement.value
    todos.push(todoText)
    inputElement.value = ''
    renderTodos();
    saveToStorage()
}

btnElement.onclick = addTodo

function deleteTodo(pos){
    todos.splice(pos,1)
    renderTodos()
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('list_todos',JSON.stringify(todos))

}
