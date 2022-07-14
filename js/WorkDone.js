import WorksToDo from "./Work.js";
export default class WorkDone extends WorksToDo{
    constructor(...params){
        super(...params)
    }
    showHTML(index){
        let content =`
        <li>
            <span>${this.content}</span>
            <div class="buttons">
                <div class="button remove" onclick = "deleteWork('${index}')">
                    <i class="fa fa-trash-alt"></i>
                </div>
                <div class="button complete">
                    <div class="far">
                        <i class="fa fa-check-circle"></i></div>
                </div>
            </div>
        </li>
        `
        document.getElementById("completed").innerHTML += content;
    }
}