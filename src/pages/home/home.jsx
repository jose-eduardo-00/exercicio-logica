import { Calculator } from "../../components/calculator/calculator"
import { Stopwatch } from "../../components/stopwatch/stopwatch"
import { ToDoList } from "../../components/toDoList/toDoList"
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