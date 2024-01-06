import './calculator.css'

const Calculator = () => {
    return (
        <section className="container">
            <h1>Calculadora</h1>

            <div className='calculator'>
                <input type="text" />
                <div className='button-div'>
                    <div className='button-row'>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button>/</button>
                    </div>
                    <div className='button-row'>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>x</button>
                    </div>
                    <div className='button-row'>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>-</button>
                    </div>
                    <div className='button-row'>
                        <button>0</button>
                        <button>.</button>
                        <button>+</button>
                        <button>=</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Calculator }