let list = [];
function addTask() {
    let count=1;
    let task = document.getElementById('user_task');
    let paragraph = document.getElementById('show_task');
    paragraph.textContent = "";
    list.push(task.value);
    for (let i = 0; i < list.length; i++) {
        
        paragraph.textContent += count++ +". "+list[i] + "\n"
    }
    paragraph.style.backgroundColor = "#ffffff";
    paragraph.style.color = "#1e293b";
    paragraph.style.padding = "20px";
    paragraph.style.width = "100%";
    paragraph.style.maxWidth = "450px";
    paragraph.style.fontSize = "18px";
    paragraph.style.lineHeight = "2";
    paragraph.style.borderRadius = "12px";
    paragraph.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
    paragraph.style.overflowWrap = "anywhere";


    task.value = "";

}

function removeLastTask() {
    let count=1;
    list.pop()
    let paragraph = document.getElementById('show_task');
    paragraph.textContent = "";

    for (let i = 0; i < list.length; i++) {

        paragraph.textContent += count++ +". "+list[i] + "\n"

    }
}
function removeFirstTask() {
    let count=1;
    list.shift()
    let paragraph = document.getElementById('show_task');
    paragraph.textContent = "";

    for (let i = 0; i < list.length; i++) {

        paragraph.textContent += count++ +". "+list[i] + "\n"

    }
}

function addTasktAtStart() {
    let count=1;
    let task = document.getElementById('user_task');
    let paragraph = document.getElementById('show_task');
    paragraph.textContent = "";
    list.unshift(task.value)

    for (let i = 0; i < list.length; i++) {

        paragraph.textContent += count++ +". "+list[i] + "\n"

    }

    task.value = "";
}