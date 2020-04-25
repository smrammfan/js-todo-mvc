import Task from "./Task.js"
export default class Model {
    constructor(){
        this.tasks = [];
    }

    addTask(text){
        let id = (this.tasks.length == 0 ? 1: this.tasks[this.tasks.length - 1].id + 1);
        let task = new Task(id, text, false);
        this.tasks.push(task);
    }

    deleteTask(id){
       const taskIndex = this.tasks.findIndex((task) => parseInt(task.id) === parseInt(id));
       this.tasks.splice(taskIndex, 1);
    }

    clickCheckbox(id){
        const taskIndex = this.tasks.findIndex((task) => parseInt(task.id) === parseInt(id));
        this.tasks[taskIndex].changeWasDone();
    }

    rewriteId(){
        for(let i = 0; i < this.tasks.length; i++){
            this.tasks[i].id = i + 1;
        }
    }
}