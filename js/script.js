const app = Vue.createApp({
    name: 'To Do List',
    data(){
        return {
            newTask: '',
            tasks: [
                {
                    id: 1,
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    id: 2,
                    text: 'Giocare a Zelda',
                    done: false
                },
                {
                    id: 3,
                    text: 'Fare l\'esercizio di Boolean',
                    done: false
                },
                {
                    id: 4,
                    text: 'Ordinare la cena',
                    done: false
                },
                {
                    id: 5,
                    text: 'Guardare Striscia la Notizia',
                    done: false
                }
            ]
        }
    },
    computed: {
        highestId(){
            let highestId = 0;
            this.tasks.forEach(task => {if(task.id > highestId) highestId = task.id});
            return highestId;
        }
    },
    methods: {
        deleteTask(taskId){
            let tasks = [];
            tasks = this.tasks.filter(task => {if(task.id !== taskId) return task});
            this.tasks = tasks;
        },
        addTask(){
            this.tasks.push({id: this.highestId + 1, text: this.newTask, done: false});
            this.newTask = '';
        },
        toggleTaskDone(taskId){
            this.tasks.forEach(task => {if(taskId === task.id) task.done = !task.done;})
        }
    }
});

app.mount('#root');