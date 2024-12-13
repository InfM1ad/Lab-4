window.onload = function () {
    document.querySelector('#push').onclick = function () {
        if (document.querySelector('#newtask input').value.length == 0) {
            alert("Kindly Enter Task Name!!!!")
        }

        else {
            document.querySelector('#tasks').innerHTML += `
                <div class="task">
                    <span id="taskname">
                        ${document.querySelector('#newtask input').value}
                    </span>
                    <button class="delete-icon">
                        <i class="far fa-trash-alt"><img src="4115230-cancel-close-cross-delete_114048.svg" /> </i>
                    </button>
                </div>
            `;

            var current_tasks = document.querySelectorAll(".delete-icon");
            for (var i = 0; i < current_tasks.length; i++) {
                current_tasks[i].onclick = function () {
                    this.parentNode.remove();
                }
            }
        }
    }
}