import { Task } from "../task/task"

let key = 1
let id = 1
let taskObject = {}

function addTask(task, setTask) {
    const input = document.getElementById('input-task')

    taskObject[id] = {
        text: input.value,
        id: id
    }
    if (input.value === "") {
        return
    } else {
        setTask(task.concat(<Task task={taskObject[id]} key={key} />))
        input.value = ""
        key++
        id++
    }
}

function clearAllTasks(setTask) {
    setTask([])
    id = 1
}

export { addTask, clearAllTasks }