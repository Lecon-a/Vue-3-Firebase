// dynamic rendering
const app = Vue.createApp({
    data() {
        return {
            showBook: true,
            books: [
                {title: 'Open Heaven', author: 'Pastor E.A. Adeboye'},
                {title: 'The Potency of Historical Event', author: 'Sunday P. Afolabi'},
                {title: 'The Core of David', author: 'Sunday P. Afolabi'},
            ],
            age: 31,
            posX: 0,
            posY: 0,
        }
    },
    methods: {
        changeTitle() {
            this.title = "Vuejs"
        },
        addOne() {
            this.age++;
        },
        toggleShowBook() {
            this.showBook = !this.showBook
        },
        handleEvent(e, data) {
            console.log(e, e.type);
            if (data) {
                console.log("Data: ", data);
            }
        },
        handleMouseMove(e) {
            this.posX = e.offsetX;
            this.posY = e.offsetY;
        }
    }
});

app.mount("#app")