import { useState } from 'react'
import './stopwatch.css'
import { reset, start, stop } from './utils'

const Stopwatch = () => {

    let [time, setTime] = useState({ms:0, s:0, m:0, h:0})
    let [interv, setInterv] = useState()

    return (
        <section className="container">
            <h1>Cronômetro</h1>
            <section className='stopwatch'>
                <div className='timer'>
                    <p>{(time.h >= 10)? time.h : "0" + time.h}</p>&nbsp;:&nbsp;
                    <p>{(time.m >= 10)? time.m : "0" + time.m}</p>&nbsp;:&nbsp;
                    <p>{(time.s >= 10)? time.s : "0" + time.s}</p>&nbsp;:&nbsp;
                    <p>{(time.ms >= 10)? time.ms : "0" + time.ms}</p>
                </div>
                <div className='stopwatch-options'>
                    <button onClick={() => start(time, setTime, setInterv)}>Start</button>
                    <button onClick={() => stop(interv)}>Stop</button>
                    <button onClick={() => reset(time, setTime, interv)}>Reset</button>
                </div>
            </section>
        </section>
    )
}

export { Stopwatch }