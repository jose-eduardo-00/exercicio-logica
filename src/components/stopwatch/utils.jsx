function start(time, setTime, setInterv) {
    var updateMs = time.ms, updateS = time.s, updateM = time.m, updateH = time.h

    const run = () => {
        if ( updateM === 60) {
            updateH++
            updateM = 0
        }
        if (updateS === 60) {
            updateM++ 
            updateS = 0
        }
        if (updateMs === 100) {
            updateS++
            updateMs = 0
        }
        updateMs++
        return setTime({ms:updateMs, s:updateS, m:updateM, h:updateH})
    }

    run()
    setInterv(setInterval(run , 10))
}

function stop(interv) {
    clearInterval(interv)
}

function reset(time, setTime, interv) {
    clearInterval(interv)
    setTime({ms:0, s:0, m:0, h:0})
}


export { start, stop, reset }