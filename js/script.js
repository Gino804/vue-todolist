const app = Vue.createApp({
    name: 'To Do List',
    data(){
        return {
            newTask: "",
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

    },
    methods: {
        deleteTask(taskId){
            let tasks = [];
            tasks = this.tasks.filter(task => {if(task.id !== taskId) return task});
            console.log(tasks)
            this.tasks = tasks;
        },
        addTask(){
            this.tasks.push({id: this.tasks.length + 1, text: this.newTask, done: false});
        }
    }
});

app.mount('#root');