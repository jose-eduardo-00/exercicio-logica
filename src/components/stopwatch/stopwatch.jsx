import './stopwatch.css'

const Stopwatch = () => {
    return (
        <section className="container">
            <h1>Cronômetro</h1>
            <section className='stopwatch'>
                <p>00:00</p>
                <div className='stopwatch-options'>
                    <button>Start</button>
                    <button>Stop</button>
                    <button>Restart</button>
                </div>
            </section>
        </section>
    )
}

// criar a logica pra que os tres exercicios funcionem corretamente

export { Stopwatch }