import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Task } from '../task/task'
import './toDoList.css'

const ToDoList = () => {
    return (
        <section className="container">
            <h1>Lista de Tarefa</h1>
            <div className='todo-list'>
                <header className='header'>Lista de Tarefa</header>
                <div className='search'>
                    <input type="text" placeholder='Search Task' />
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <main className='tasks'>
                    <Task />
                    <Task />
                    <Task />
                </main>
                <button className='btn-clear'>Clear All</button> 
                <footer className='footer'>
                    <div className='footer-div'>
                        <input type="text" placeholder='Add new Task' />
                        <button className='btn-add'><FontAwesomeIcon icon={faPlus} className='icon-add' />Add</button>
                    </div>
                </footer> 
            </div>
        </section>
    )
}

export { ToDoList }