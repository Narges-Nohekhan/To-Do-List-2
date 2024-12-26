document.querySelector('#push').onclick = function () {
    if (document.querySelector('#new-task input').value.length == 0) {
        alert("Please Enter a Task")
    }
    else {
        document.querySelector('#tasks').innerHTML += `
         <div class= "task">
                <span id="taskname">${document.querySelector('#new-task input').value}</span>
        `;
    }
}