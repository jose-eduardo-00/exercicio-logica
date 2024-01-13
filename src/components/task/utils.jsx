function checkedTask(id) {
    const done = document.querySelectorAll('.check')
    const textDone = document.querySelectorAll('.text-task')

    done[id-1].classList.toggle('done')
    textDone[id-1].classList.toggle('done')    
}

function deleteTask(id) {
    const taskDelete = document.querySelectorAll('.task')
    taskDelete[id-1].style.display = 'none'
}

export { checkedTask, deleteTask }