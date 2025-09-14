
//get the input element
const taskInput = document.getElementById("task");

//load from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//get the <ul> element that will display the task items
const taskList = document.querySelector("#taskList ul");

//load existing tasks from the array and display them
for (let task of tasks){
    //add each saved task to the DOM
    loadTask(task);
}

//function to add a single task to the DOM
function loadTask(task){
    //create an html list element 
    const li = document.createElement("li");

    //set the text value as the content of the list element
    li.textContent = task;

    //create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    //use the deleteTask function
    deleteBtn.onclick = function(){
        deleteTask(task, li);
    }

    //append the deleteBtn to the list <li> element
    li.appendChild(deleteBtn);

    //append the list to the task list <ul> element
    taskList.appendChild(li);
}

//function to add a new task from the input text field
function addTask(){
    //get the value entered
    const taskValue = taskInput.value;

    //check if the input element value is not empty
    if (taskValue !== ""){
        //if not empty add to tasks array
        tasks.push(taskValue);
        //add to DOM
        loadTask(taskValue);
        //save to localStorage
        saveTask();
        //clear the input
        taskInput.value = "";
    }
};

//function to update/edit a task

function updateTask(){

}

//function to delete a task

function deleteTask(task, listItem){
    //find the index of the task in the array
    const index = tasks.indexOf(task)

    //remove the task from the array if found
    if (index !== -1) {
        tasks.splice(index, 1);
    }

    //remove the list item from the DOM
    listItem.remove();

    //save updated tasks to localStorage
    saveTask();
}

//function to save a task
function saveTask() {
    //convert the tasks array to a JSON string and store it under the 'tasks' key
    localStorage.setItem('tasks', JSON.stringify(tasks));
}