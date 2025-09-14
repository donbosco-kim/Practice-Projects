
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

    //append it to the task list
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

function deleteTask(){

}

//function to save a task
function saveTask() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}