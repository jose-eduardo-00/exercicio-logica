import './toDoList.css'

const ToDoList = () => {
    return (
        <section className="container">
            <h1>Lista de Tarefa</h1>
            <div className='todo-list'>
                <header>Lista de Tarefa</header>
                <div>
                    <input type="search" />
                    {/* adicionar icone de pesquisa */}
                </div>
                <div>
                    <div>
                        {/* icone para marcar certo e errado */}
                        <p>texto da tarfea</p>
                        {/* icone de lixeira */}
                    </div>
                    <div>
                        {/* icone para marcar certo e errado */}
                        <p>texto da tarfea</p>
                        {/* icone de lixeira */}
                    </div>
                    <div>
                        {/* icone para marcar certo e errado */}
                        <p>texto da tarfea</p>
                        {/* icone de lixeira */}
                    </div>
                </div>
                <button>Clear All</button> 
                <footer>
                    <div>
                        <input type="text" />
                        <button>+add</button>
                    </div>
                </footer> 
            </div>
        </section>
    )
}

export { ToDoList }