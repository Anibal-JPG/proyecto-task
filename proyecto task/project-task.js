//////////// PROYECTO TASK
const tasks = [
    {content: "ESTUDIAR JS", isComplete: true },
    {content: "HACER EJERCICIO", isComplete: false}
]


function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const taskContent = form.elements["new-task"].value;
    if (taskContent !== "") {
        const newtask = {content: taskContent, isComplete: false}
        tasks.push(newtask);
    }
    form.reset();
    return renderTask();
}
const form = document.querySelector("#new-task-form");
form.addEventListener("submit", handleSubmit);

function createTaskElements(tasks) {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const button = document.createElement("button");

    input.type = "checkbox";
    input.checked = tasks.isComplete;
    input.addEventListener("change", 
    function handleChange() {
        if(tasks.isComplete === true){
            tasks.isComplete = false;
        } else{
            tasks.isComplete = true;
        }
    });
    span.textContent = tasks.content;
    button.textContent = "Delete";

    li.append(input, span, button);
    return li;    
}

function renderTask() {
const ol = document.querySelector(".task-list");
ol.innerHTML = "";

for(let i = 0; i < tasks.length; i++){
  const li = createTaskElements(tasks[i]);
  ol.append(li);
}

}

renderTask();

























// const form = {
//     label:{
//         tag:"label",
//         textContent: "Name your task:",
//         htmlFor: "new-task"
//     },
//     imput:{
//         id:"New Task",
//         htmlName:"New Task",
//         type: "text",
//         placeHolder: "wash the dishes..."
//     },
//     button:{
//         textHtml: "add"
//     }

// }