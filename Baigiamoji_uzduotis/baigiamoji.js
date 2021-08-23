class Task {

    static tasks = [];
    element;

    static start() {
        this.buttonSaveNewTask();
        this.addNewTaskButton();
        this.load();
    }

    // static createNewTaskModal() {
    //     const html = `
    //     <h4> ${this.taskTitle} </h4>
    //     <textarea> ${this.taskDescription} </textarea>
    //     <br>
    //     <button class="btn btn-primary" data-id="${this.id}"> X </button>
    //     `;
    //     // this.element.innerHTML = html;

    // }

    static showCreateModal() {
        const modal = document.querySelector('#create-modal');
        modal.style.display = 'block';
        modal.style.opacity = 1;
        // modal.querySelector('.btn-primary').dataset.id = tasks.id;
    }

    static hideCreateModal() {
        const modal = document.querySelector('#create-modal');
        modal.style.display = 'none';
        modal.style.opacity = 0;
        delete modal.querySelector('.btn-secondary').dataset.id;
    }

    static buttonSaveNewTask() {
        const taskTitle = document.querySelector('#create-modal [name=task-title]');
        const taskDescription = document.querySelector('#create-modal [name=task-description]');
        document.querySelector('#btn-save-task').
            addEventListener('click', () => {
                this.createTask(taskTitle.value, taskDescription.value, 'New');
                // console.log(taskTitle.value, taskDescription.value);
            });
    }

    static addNewTaskButton() {
        document.querySelector('#add-new-task').
            addEventListener('click', () => this.showCreateModal());
            
    }

    static createTask(taskTitle, taskDescription, taskStatus) {
        this.clearTask();
        this.tasks.push(new Task(taskTitle, taskDescription, taskStatus));
        this.renderTask();
        this.save();
        this.hideCreateModal();
    }

    static renderTask() {
        this.tasks.forEach(e => {
            e.render();
            // console.log(e);
        });
        // console.log(this.tasks);
    }

    static clearTask() {
        document.querySelector('.task-columns').innerHTML = '';
    }

    static save() {
        const data = [];
        this.tasks.forEach(k => {
            data.push({
                taskTitle: k.taskTitle,
                taskDescription: k.taskDescription,
                taskStatus: k.taskStatus,
                taskId: k.taskId,
            });
        });
        // console.log(data);

        //Local storage
        localStorage.setItem('tasksApp', JSON.stringify(data));
    }


    static load() {
        if (null === localStorage.getItem('tasksApp')) {
            localStorage.setItem('tasksApp', JSON.stringify([]));
        }
        JSON.parse(localStorage.getItem('tasksApp'))
            .forEach(j => this.createTask(j.taskTitle, j.taskDescription, j.taskStatus));
    }


    constructor(taskTitle, taskDescription, taskStatus, taskId) {
        this.taskTitle = taskTitle;
        this.taskDescription = taskDescription;
        this.taskStatus = taskStatus;
        this.taskId = taskId;
    }

    render() {
        this.createNewTask();
        // this.createNewTaskModal();
    }

    createNewTask() {
        const html = document.createElement('div');
        html.classList.add('new-task-card');

        const body = document.createElement('div');
        body.classList.add('task-content');

        // if (this.taskStatus == 'new') {
        //     body.classList.add('new-task-card');
        //     console.log('bla1: ', this.taskStatus);
        // }
        // else if (this.taskStatus == 'pending') {
        //     body.classList.add('pending-task-card');
        //     console.log('bla2: ', this.taskStatus);
        // }
        // else {
        //     body.classList.add('done-task-card');
        //     console.log('bla3: ', this.taskStatus);
        // }

        body.appendChild(document.createElement('h4')).appendChild(document.createTextNode(this.taskTitle));
        body.appendChild(document.createElement('div')).appendChild(document.createTextNode(this.taskDescription));
        // console.log(body);
        html.appendChild(body);
        document.querySelector('.task-columns').appendChild(html);
    }

}

Task.start();