const getTaskDescriptions = ((taskList) =>{
    const taskDescriptions = [];
    
     taskList.forEach((element) => taskDescriptions.push(element.description) )

   return taskDescriptions;
} )

const filterTasksByPriority = ((tasksList, priority) => {

    const input = priority.toLowerCase();

    const matchingTasks = tasksList.filter(task => task.priority.includes(input))

    return matchingTasks;
} )
  
const findTaskById = ((tasksList, id) => {

    const filteredTasks = tasksList.filter(task => task.id == id )

    return filteredTasks;
})

const removeTasks = ((tasksLists, id) => {

    const indexToRemove = tasksLists.findIndex(task => task.id === id )

    if(indexToRemove !== -1) {
        const removedTask = tasksLists.splice(indexToRemove, 1)[0];
        return removedTask
    }else {
        return 'Tarefa não encontrada'
    }
})
