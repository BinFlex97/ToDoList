export default class WorksToDo {
    constructor(content,isDone) {
        this.content = content;
        this.isDone = isDone;
    }
    showHTML(index) {
        let content =`
        <li>
            <span>${this.content}
            </span>
            <div class="buttons">
                <div class="button remove" onclick = "deleteWork('${index}')">
                    <i class="fa fa-trash-alt"></i>
                </div>
                <div class="button complete" onclick = "checkDone('${index}')">
                    <div class="far">
                        <i class="fa fa-check-circle"></i></div>
                </div>
            </div>
        </li>
        `
        document.getElementById("todo").innerHTML += content;
    }
}