export default class View {
    constructor(){}
    
    showAllTasks(tasks){
        if(tasks.length == 0){
            document.querySelector("#main-table").innerHTML = "<tr><td><p class = \"display-4 text\">There will be your tasks here</p></td></tr>";
            return;
        }

        let tableHtmlText = "<tr><th>№</th><th>Task</th></tr>";
        for(let i = 0; i < tasks.length; i++){
            tableHtmlText += tasks[i].toHTML();
        }
        document.querySelector("#main-table").innerHTML = tableHtmlText;
    }

    clearInput(){
        document.getElementById('getTaskInput').value = "";
    }

    setInputText(text){
        document.getElementById('getTaskInput').value = text;
    }

    printMessage(message){
        alert(message);
    }

    getText(message){
        return prompt(message);
    }
}