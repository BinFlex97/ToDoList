import WorksToDo from "./Work.js";
import WorkDone from "./WorkDone.js"
let workList = [];

let addWork = () => {
    let content = document.getElementById("newTask").value;
    let isDone = false;
    let worksToDo = new WorksToDo(content, isDone);
    workList.push(worksToDo);
    showWorks();
    console.log(workList);
}
let showWorks = () => {
    document.getElementById("todo").innerHTML = "";
    document.getElementById("completed").innerHTML = "";
    workList.map((work, index) => {
        work.showHTML(index);
    })
}
let deleteWork = (index) => {
    workList.splice(index, 1);
    showWorks();
}
let checkDone = (index) => {
    let { content } = workList[index];
    let isDone = true;
    let workDone = new WorkDone(content, isDone);
    workList.push(workDone);
    workList.splice(index, 1);
    showWorks();
    console.log(workList);
}
let sortAZ = (num) => {
    for (let i = 0; i < workList.length; i++) {
        if (workList[i].isDone == false) {
            for (let a = i; a < workList.length; a++) {
                let text1 = workList[i].content;
                let text2 = workList[a].content;
                if (workList[a].isDone == false && text1.localeCompare(text2) == num) {
                    let cont = workList[i];
                    workList[i] = workList[a];
                    workList[a] = cont;
                }
            }
        }
    }
    showWorks();
}
window.deleteWork = deleteWork;
window.checkDone = checkDone;
window.sortAZ = sortAZ;
document.getElementById("addItem").addEventListener("click", addWork);