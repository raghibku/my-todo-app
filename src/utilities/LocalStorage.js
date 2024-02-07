const getTaskFromLS = () => {
    const selectedTask = localStorage.getItem('task');
    if(selectedTask){
        const selectedTaskParsed = JSON.parse(selectedTask);
        return selectedTaskParsed;
    }
    return [];
}

const addTaskToLS=(newTask)=>{
    const savedTasks = getTaskFromLS();
    savedTasks.push(newTask);
    const savedTasksStringified = JSON.stringify(savedTasks);
    localStorage.setItem('task',savedTasksStringified)
}
const deleteTaskinLS = (id) => {
    const savedTasks = getTaskFromLS();
    const newSavedTasks = savedTasks.filter(task=>task.id !== id)
    const savedTasksStringified = JSON.stringify(newSavedTasks);
    localStorage.setItem('task',savedTasksStringified)
}
const completeTaskinLS=(id)=>{
    const savedTasksPre = getTaskFromLS();
    const completedTask = savedTasksPre.filter(task=>task.id==id)
    const savedTasks = savedTasksPre.filter(task=>task.id !== id)
    console.log(completedTask[0].taskStatus)
    completedTask[0].taskStatus = "complete";
    console.log(completedTask)
    savedTasks.push(completedTask[0]);
    const savedTasksStringified = JSON.stringify(savedTasks);
    localStorage.setItem('task',savedTasksStringified)
}
const updateTaskinLS = (id,newTask) => {
    const savedTasks = getTaskFromLS();
    const newSavedTasks = savedTasks.filter(task=>task.id !== id)
    newSavedTasks.push(newTask);
    const savedTasksStringified = JSON.stringify(newSavedTasks);
    localStorage.setItem('task',savedTasksStringified)
}

export {getTaskFromLS,addTaskToLS,completeTaskinLS,deleteTaskinLS,updateTaskinLS}