// dynamic rendering
const app = Vue.createApp({
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 31,
        }
    },
    methods: {
        changeTitle() {
            this.title = "Vuejs"
        },
        addOne() {
            this.age++;
        }
    }
});

app.mount("#app")