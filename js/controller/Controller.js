export default class Controller {
    constructor(model, view){
        this.model = model;
        this.view = view;
        this.initOnModelChange();
        document.querySelector('#addTaskButton').addEventListener('click', (e)=>this.addTask(e));
        document.querySelector('#main-table').addEventListener('click', (e)=>this.changeTask(e));
    }

    addTask(e){ 
        let task = document.querySelector('#getTaskInput').value;
        if(task === ""){
            this.view.setInputText("Write something");
            return;
        }    
        this.model.addTask(task);
    }
    
    changeTask(e){
        e = e || window.event;
        let target = e.target || e.srcElement;
        if(target.tagName == 'INPUT'){
            let id = target.name;
            this.model.clickCheckbox(id);
            this.view.showAllTasks(this.model.tasks);
        }else if(target.id == 'delButtons'){
            let id = target.name;
            this.model.deleteTask(id);
        }
    }

    initOnModelChange() {
        /* updates UI when a model list has changed (adds, deletes tasks) */
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                this.model.rewriteId();
                this.view.showAllTasks(this.model.tasks);
                this.view.clearInput();
                return true;
            }
        }
        this.model.tasks = new Proxy(this.model.tasks, handler);
    }

}