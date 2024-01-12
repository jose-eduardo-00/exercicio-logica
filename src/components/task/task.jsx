import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './task.css'


const Task = () => {
    return (
        <div className='task'>
            <div className='check done'><FontAwesomeIcon icon={faCheck} /></div>
            <p>texto da tarefa texto da tarefa</p>
            <div><FontAwesomeIcon icon={faTrash} className='trash' /></div>
        </div>
    )
}

export { Task }