// dynamic rendering
const app = Vue.createApp({
    data() {
        return {
            url: "https://github.com/Lecon-a",
            showBook: true,
            books: [
                {title: 'Open Heaven', author: 'Pastor E.A. Adeboye', book_cover: "assets/book1.jpg", isFav: false},
                {title: 'The Potency of Historical Event', author: 'Sunday P. Afolabi', book_cover: "assets/book1.jpg", isFav: true},
                {title: 'The Core of David', author: 'Sunday P. Afolabi', book_cover: "assets/book1.jpg", isFav: false},
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
            if (data) {
                console.log("Data: ", data);
            }
        },
        handleMouseMove(e) {
            this.posX = e.offsetX;
            this.posY = e.offsetY;
        },
        toggleIsFavourite(index) {
            //alert("Click")
            this.books[index].isFav = !this.books[index].isFav
        }
    }
});

app.mount("#app")