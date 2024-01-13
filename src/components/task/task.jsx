import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './task.css'
import { checkedTask, deleteTask } from "./utils"


const Task = (task) => {
    return (
        <div className='task'>
            <div className='check' onClick={() => checkedTask(task.task.id)}><FontAwesomeIcon icon={faCheck} /></div>
            <p className="text-task">{task.task.text}</p>
            <div onClick={() => deleteTask(task.task.id)}><FontAwesomeIcon icon={faTrash} className='trash' /></div>
        </div>
    )
}

export { Task }