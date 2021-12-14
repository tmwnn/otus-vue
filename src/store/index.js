import { createStore } from "vuex";
import { authorsInit } from '../hooks/authors';
import { booksInit } from '../hooks/books';
export default createStore({
    state: () => ({
        authors: authorsInit,
        books: booksInit,
    }),
    mutations: {
        authorsSave(state, authors) {
            localStorage.setItem('authors', JSON.stringify(authors));
        },
        booksSave(state, books) {
            localStorage.setItem('books', JSON.stringify(books))
        },
    },
    actions: {},
    getters: {
        authors (state) {
            let authorsLoaded = [];
            let authorsLoadedJson = localStorage.getItem('authors');
            if (!authorsLoadedJson) {
                authorsLoaded = state.authors;
                localStorage.setItem('authors', JSON.stringify(authorsLoaded))
            } else {
                authorsLoaded = JSON.parse(authorsLoadedJson);
            }
            return authorsLoaded;
        },
        books (state) {
            let booksLoaded = [];
            let booksLoadedJson = localStorage.getItem('books');
            if (!booksLoadedJson) {
                booksLoaded = state.books;
                localStorage.setItem('books', JSON.stringify(booksLoaded))
            } else {
                booksLoaded = JSON.parse(booksLoadedJson);
            }
            booksLoaded.forEach((book) => {
                book.author = state.authors.find(o => +o.id === +book.author_id).name;
            });
            return booksLoaded;
        }
    }
});