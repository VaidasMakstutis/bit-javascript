class Task {

    static tasks = [];
    element;

    static start() {
        this.buttonSaveNewTask();
        this.addNewTaskButton();
        this.buttonConfirmDelete();
        this.buttonHideModal();
        this.load();
    }


    static showCreateModal() {
        const modal = document.querySelector('#create-modal');
        modal.style.display = 'block';
        modal.style.opacity = 1;
    }

    static showDeleteConfirmModal(id) {
        const modal = document.querySelector('#confirm-delete');
        modal.style.display = 'block';
        modal.style.opacity = 1;
        modal.querySelector('.btn-primary').dataset.id = id;
    }

    static buttonConfirmDelete() {
        document.querySelector('#confirm-delete .btn-primary')
            .addEventListener('click', (e) => {
                this.deleteTask(e.target.dataset.id);
                this.hideModal('confirm-delete');
            });
    }

    static hideModal(id) {
        const modal = document.querySelector('#' + id);
        modal.style.display = 'none';
        modal.style.opacity = 0;
        delete modal.querySelector('.btn-primary').dataset.id;
    }

    static buttonSaveNewTask() {
        const taskTitle = document.querySelector('#create-modal [name=task-title]');
        const taskDescription = document.querySelector('#create-modal [name=task-description]');
        document.querySelector('#btn-save-task').
            addEventListener('click', () => {
                this.createTask(taskTitle.value, taskDescription.value, "New");
                // console.log(taskTitle.value, taskDescription.value);
            });
    }

    static addNewTaskButton() {
        document.querySelector('#add-new-task').
            addEventListener('click', () => this.showCreateModal());
            
    }

    static buttonHideModal() {
        document.querySelectorAll('[data-dismiss=modal]')
        .forEach(b => { b.addEventListener('click', (e) => this.hideModal(e.target.closest('.modal').id))
        });
    }

    static createTask(taskTitle, taskDescription, taskStatus, id) {
        this.clearTask();
        this.tasks.push(new Task(taskTitle, taskDescription, taskStatus, id));
        this.save();
        this.renderTask();
        this.hideModal('create-modal');
        console.log(this.tasks);
    }

    static deleteTask(id) {
        this.tasks.forEach((task, index) => { 
            if(task.id == id) {
                this.clearTask();
                this.tasks.splice(index, 1);
                this.renderTask();
            }
    });
        this.save();
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
                id: k.id
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
            .forEach(j => this.createTask(j.taskTitle, j.taskDescription, j.taskStatus, j.id));
    }


    constructor(taskTitle, taskDescription, taskStatus, id) {
        this.taskTitle = taskTitle;
        this.taskDescription = taskDescription;
        this.taskStatus = taskStatus;
        this.id = id;
        this.createTaskRandom();
    }

    render() {
        this.createNewTask();
        this.createNewResults();
        this.deleteButton();
        // this.createNewTaskModal();
    }

    createNewResults() {

    }

    createNewTask() {

        const html = document.createElement('div');
        html.classList.add('new-task-card');

        const body = document.createElement('div');
        body.classList.add('task-content');

        if (this.taskStatus === "new") {
            body.classList.add('new');
            // console.log('bla1: ', this.taskStatus);
        }
        else if (this.taskStatus === "pending") {
            body.classList.add('pending');
            // console.log('bla2: ', this.taskStatus);
        }
        else {
            body.classList.add("done");
            // console.log('bla3: ', this.taskStatus);
        }


        body.appendChild(document.createElement('h4')).appendChild(document.createTextNode(this.taskTitle));
        body.appendChild(document.createElement('div')).appendChild(document.createTextNode(this.taskDescription));


        const buttonhtml = document.createElement('div');
        buttonhtml.classList.add('btn-delete');
        buttonhtml.appendChild(document.createElement('button')).appendChild(document.createTextNode('X'));

        // <button class="btn-delete-modal" data-id="${this.id}"> X </button>
   
        html.appendChild(body);
        body.appendChild(buttonhtml);
        document.querySelector('.task-columns').appendChild(html);
    }

    createTaskRandom() {
        this.id = Math.floor(Math.random() * 9000000) + 1000000;
    }

    deleteButton() {
        document.querySelectorAll('.btn-delete').forEach(btn => {

            btn.addEventListener('click', (e) => {
                this.constructor.showDeleteConfirmModal(this.id);
                this.constructor.deleteTask(e.target.dataset.id);
            });
        })     
    }
   
}

Task.start();