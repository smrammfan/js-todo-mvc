export default class Task {
    constructor(id, task, wasDone){
        this.id = id;
        this.task = task;
        this.wasDone = false;
    }

    changeWasDone(){
        this.wasDone = !this.wasDone;
    }

    toHTML(){
        let textDecoration = (this.wasDone? "line-through":"none");
        let checked = (this.wasDone? "checked":" ");
        let text = `<p style = "text-decoration-line: ${textDecoration}; font-size: 20px;" class = "text">${this.task}</p>`;
        let buttonText = `<button id = "delButtons" class = "btn btn-default task-button" name = ${this.id}>Delete</button>`;
        let radioText = `<div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" name = ${this.id} id="input-check${this.id}" ${checked}>
                            <label class="custom-control-label" name = ${this.id} for="input-check${this.id}">Done</label>
                        </div>`;
        return `<tr><td>${this.id}</td><td>${text}</td><td>${radioText}</td><td>${buttonText}</td></tr>`;
    }
}