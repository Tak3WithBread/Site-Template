
function Form(){`
        var Form = <form id="addTasks" method="POST">
        <fieldset>
        Titlu: <input></input>
        Nume: <input></input>
        <label> new Date</label>
        <button type="submit" class="btn">Add Task</button>
        <button type="submit" class="btncancel" onclick="closeForm()">Close</button>
        </fieldset>
        </form>`
}

const add = document.getElementById("postRequest").onclick = Form();
console.log("hellow world");
console.log(add);