import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './toDoList.css'
import { faCheck, faMagnifyingGlass, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

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
                    <div className='task'>
                        <div className='check'><FontAwesomeIcon icon={faCheck} /></div>
                        <p>texto da tarefa</p>
                        <div><FontAwesomeIcon icon={faTrash} className='trash' /></div>
                    </div>
                    <div className='task'>
                        <div className='check done'><FontAwesomeIcon icon={faCheck} /></div>
                        <p>texto da tarefa texto da tarefa</p>
                        <div><FontAwesomeIcon icon={faTrash} className='trash' /></div>
                    </div>
                    <div className='task'>
                        <div className='check'><FontAwesomeIcon icon={faCheck} /></div>
                        <p>texto da tarefa</p>
                        <div><FontAwesomeIcon icon={faTrash} className='trash' /></div>
                    </div>
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