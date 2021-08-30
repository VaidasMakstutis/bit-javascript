class Task {

    static tasks = [];
    element;
    static newTasks;
    static pendingTasks;
    static doneTasks;

    static start() {
        this.buttonSaveNewTask();
        this.buttonAddNewTask();
        this.buttonConfirmDelete();
        this.buttonHideModal();
        this.buttonStatus();
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
                this.createTask(taskTitle.value, taskDescription.value);
                // "New"
                // console.log(taskTitle.value, taskDescription.value);
            });
    }

    static buttonAddNewTask() {
        document.querySelector('#add-new-task').
            addEventListener('click', () => this.showCreateModal());

    }

    static buttonHideModal() {
        document.querySelectorAll('[data-dismiss=modal]')
            .forEach(b => {
                b.addEventListener('click', (e) => this.hideModal(e.target.closest('.modal').id))
            });
    }

    static buttonStatus() {
        const btnNewTask = document.querySelector(".new-task");
        if (this.newTasks == 0) {
            btnNewTask.style.cursor = "default";
        }
        btnNewTask.addEventListener("click", () => {
            swiper.slideTo(0, 300, true);
        });

        const btnPendingTask = document.querySelector(".pending-task");
        if (this.pendingTasks == 0) {
            btnPendingTask.style.cursor = "default";
        }
        btnPendingTask.addEventListener("click", () => {
            swiper.slideTo(1, 300, true);
        });

        const btnDoneTask = document.querySelector(".done-task");
        if (this.doneTasks == 0) {
            btnDoneTask.style.cursor = "default";
        }
        btnDoneTask.addEventListener("click", () => {
            swiper.slideTo(2, 300, true);
        });
    }

    static createTask(taskTitle, taskDescription, taskStatus, id) {
        this.clearTasks();
        this.tasks.push(new this(taskTitle, taskDescription, taskStatus, ++id));
        this.save();
        this.renderTasks();
        this.hideModal('create-modal');
        console.log(this.tasks);
    }

    static changeTaskStatus(id) {
        this.tasks.forEach(k => {
            if (k.id == id) {
                this.clearTasks();
                let checking = 0;
                if (k.taskStatus == "new") {
                    // if (this.newTasks <= 1) swiper.slideNext(300, true);
                    k.taskStatus = "pending";
                }
                else if (k.taskStatus == "pending") {
                    // if (this.pendingTasks <= 1) swiper.slideNext(300, true);
                    k.taskStatus = "done";
                } else {
                    // if (this.doneTasks <= 1) swiper.slideTo(0, 300, true);
                    k.taskStatus = "pending";
                }
                this.renderTasks();
            }
        });
        this.save();
    }


    static deleteTask(id) {
        this.tasks.forEach((k, index) => {
            if (k.id == id) {
                this.clearTasks();
                this.tasks.splice(index, 1);
                this.renderTasks();
            }
        });
        this.save();
    }

    static renderTasks() {
        this.renewStatus();
        this.tasks.forEach(k => k.render());
        // console.log(this.tasks);
    }

    static renewStatus() {
        this.newTasks = 0;
        this.pendingTasks = 0;
        this.doneTasks = 0;
        this.tasks.forEach(k => {
            if (k.taskStatus == "new") {
                this.newTasks++;
            }
            if (k.taskStatus == "pending") {
                this.pendingTasks++;
            }
            if (k.taskStatus == "done") {
                this.doneTasks++;
            }
        });

        const newTask = document.querySelector(".new-task");
        newTask.innerHTML = `New tasks: ${this.newTasks}`;

        const pendingTask = document.querySelector(".pending-task");
        pendingTask.innerHTML = `Pending tasks: ${this.pendingTasks}`;

        const doneTask = document.querySelector(".done-task");
        doneTask.innerHTML = `Done tasks: ${this.doneTasks}`;

        const totalTasks = document.querySelector("div.total-tasks");
        totalTasks.innerText = `Total tasks: ${this.newTasks + this.pendingTasks + this.doneTasks}`;

    }

    static clearTasks() {
        document.querySelectorAll('.task-column').forEach(task => {
            task.innerHTML = '';
        })
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
        if (localStorage.getItem('tasksApp') === null) {
            localStorage.setItem('tasksApp', JSON.stringify([]));
        }
        JSON.parse(localStorage.getItem('tasksApp'))
            .forEach(k => this.createTask(k.taskTitle, k.taskDescription, k.taskStatus, k.id));
    }


    constructor(taskTitle, taskDescription, taskStatus = "new", id) {
        this.taskTitle = taskTitle;
        this.taskDescription = taskDescription;
        this.taskStatus = taskStatus;
        this.id = id;
        this.createTaskRandom();
    }

    render() {
        this.createNewTaskHtml();
        // this.createTaskElement();
        this.deleteButton();
        // this.createNewTaskModal();
    }


    createNewTaskHtml() {

        this.html = document.createElement('div');
        this.html.classList.add('task-card');
        this.html.classList.add(this.taskStatus);

        const body = document.createElement('div');
        body.classList.add('task-content');
        body.dataset.id = this.id;

        body.appendChild(document.createElement('h4'))
        .appendChild(document.createTextNode(this.taskTitle));
        body.addEventListener("dblclick", () => {
            this.constructor.changeTaskStatus(this.id);
        });


        body.appendChild(document.createElement('div'))
        .appendChild(document.createTextNode(this.taskDescription));


        const buttonhtml = document.createElement('span');
        buttonhtml.classList.add('btn-delete');
        buttonhtml.appendChild(document.createElement('button-delete'))
        .appendChild(document.createTextNode('X'));


        const buttonchangestatus = document.createElement('div');
        buttonchangestatus.classList.add('btn-change');
        buttonchangestatus.appendChild(document.createElement('button-change'))
        .appendChild(document.createTextNode('Move'));


        this.html.appendChild(body);
        buttonchangestatus.appendChild(buttonhtml);
        body.appendChild(buttonchangestatus);
        document.querySelector(`.task-column.${this.taskStatus}`).appendChild(this.html);
    }

    createTaskRandom() {
        this.id = Math.floor(Math.random() * 9000000) + 1000000;
    }

    deleteButton() {
        this.html.querySelector('.btn-delete').addEventListener('click', (e) => {

            this.constructor.showDeleteConfirmModal(this.id);
            this.constructor.deleteTask(e.target.dataset.id);
        });
    }

}

const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: false,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  
    breakpoints: {
      // when window width is >= 480px
      540: {
        slidesPerView: 3,
        spaceBetween: 0
      }
    }
  });


Task.start();