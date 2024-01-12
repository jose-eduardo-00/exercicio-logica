import { Calculator } from '../../components/calculator/calculator'
import { ToDoList } from '../../components/toDoList/toDoList'
import { Stopwatch } from '../../components/stopwatch/stopwatch'
import './home.css'

const Home = () => {
    return (
        <main className="home">
            <Calculator />
            <ToDoList />
            <Stopwatch />
        </main>
    )
}

export { Home }