var todos=[];
var addTodoForm = document.querySelector("#addtodoform");

var listGroup = document.querySelector(".list-group");

function createListItem(todoValue,todoindex){
    var li = document.createElement("li");
    li.setAttribute("class","list-group-item d-flex justify-content-between");
    
    li.addEventListener("click",function(){
        if(todos[todoindex].completed){
            li.classList.remove("bg-secondary")
            todos[todoindex].completed=false;
        }else{
            li.classList.add("bg-secondary");
            todos[todoindex].completed=true;
        }
    })
    
    
    
    var span = document.createElement("span");
    span.innerHTML=todoValue;

    var icon = document.createElement("i");
    icon.setAttribute("class","fa-solid fa-trash-can");

    icon.addEventListener("click",function(event){
        event.stopPropagation();
        event.target.parentElement.remove();
        todos.splice(todoindex,1);
        localStorage.setItem("todos",JSON.stringify(todos));
    })
    
    li.appendChild(span);
    li.appendChild(icon);
    return li;
}

function renderTodos(todos){
    todos.forEach((todo,index) => {
        var li=createListItem(todo.value,index);
        listGroup.appendChild(li);
    });
}


var storedTodos = localStorage.getItem("todos")
if(storedTodos){
    var parsedStoredTodos = JSON.parse(storedTodos);
    todos = parsedStoredTodos;
    renderTodos(todos); 
}


addTodoForm.addEventListener("submit",function(event){
   event.preventDefault();

   var todoValue =addTodoForm.todo.value ;
   todos.push({
       value: todoValue,
       completed: false,
   })
   addTodoForm.todo.value="";

   localStorage.setItem("todos",JSON.stringify(todos));

   var li = createListItem(todoValue,todos.length-1);
   listGroup.appendChild(li);
});