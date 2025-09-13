
//function to add a task to a list
function addTask(){
    //get the input element
    const taskInput = document.getElementById("task");
    //get the input element value
    const taskValue = taskInput.value;

    //check if the input element value is not empty
    if (taskValue !== ""){
        //create an html list element if it is not empty
        const li = document.createElement("li");

        //set the text value as the content of the list element
        li.textContent = taskValue;

        //add the task to the task list
        document.querySelector("#taskList ul").appendChild(li);

        taskInput.value = "";
    }
};