import { useState } from 'react'
import './calculator.css'
import { calculate, clear, inputNum, operatorHandler, percentNum} from './utils'

const Calculator = () => {

    let [num, setNum] = useState(0)
    let [oldNum, setOldNum] = useState(0)
    let [operator, setOperator] = useState()

    return (
        <section className="container">
            <h1>Calculadora</h1>

            <div className='calculator'>
                <div className='screen'>{num}</div>
                <div className='button-div'>
                    <div className="button-row">
                        <button onClick={() => clear(setNum, setOldNum, setOperator)}>AC</button>
                        <button onClick={() => percentNum(num, setNum)}>%</button>
                    </div>
                    <div className='button-row'>
                        <button onClick={() => inputNum(num, setNum, 7)}>7</button>
                        <button onClick={() => inputNum(num, setNum, 8)}>8</button>
                        <button onClick={() => inputNum(num, setNum, 9)}>9</button>
                        <button onClick={() => operatorHandler(setOperator, setOldNum, num, setNum, "/")}>/</button>
                    </div>
                    <div className='button-row'>
                        <button onClick={() => inputNum(num, setNum, 4)}>4</button>
                        <button onClick={() => inputNum(num, setNum, 5)}>5</button>
                        <button onClick={() => inputNum(num, setNum, 6)}>6</button>
                        <button onClick={() => operatorHandler(setOperator, setOldNum, num, setNum, "*")}>*</button>
                    </div>
                    <div className='button-row'>
                        <button onClick={() => inputNum(num, setNum, 1)}>1</button>
                        <button onClick={() => inputNum(num, setNum, 2)}>2</button>
                        <button onClick={() => inputNum(num, setNum, 3)}>3</button>
                        <button onClick={() => operatorHandler(setOperator, setOldNum, num, setNum, "-")}>-</button>
                    </div>
                    <div className='button-row'>
                        <button onClick={() => inputNum(num, setNum, 0)}>0</button>
                        <button onClick={() => inputNum(num, setNum, ".")}>.</button>
                        <button onClick={() => operatorHandler(setOperator, setOldNum, num, setNum, "+")}>+</button>
                        <button onClick={() => calculate(num, operator, oldNum, setNum)}>=</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Calculator }