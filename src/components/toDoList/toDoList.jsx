import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './toDoList.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { addTask, clearAllTasks } from './utils'

const ToDoList = () => {

    let [task, setTask] = useState([])

    return (
        <section className="container">
            <h1>Lista de Tarefa</h1>
            <div className='todo-list'>
                <header className='header'>Lista de Tarefa</header>
                <main className='tasks'>
                    {task.map(e => {
                        return e
                    })}
                </main>
                <button className='btn-clear' onClick={() => clearAllTasks(setTask)}>Clear All</button> 
                <footer className='footer'>
                    <div className='footer-div'>
                        <input type="text" placeholder='Add new Task' id='input-task' />
                        <button className='btn-add' onClick={() => addTask(task, setTask)}>
                            <FontAwesomeIcon icon={faPlus} className='icon-add' />
                            Add
                        </button>
                    </div>
                </footer> 
            </div>
        </section>
    )
}

export { ToDoList }