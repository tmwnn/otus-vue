<template>
  <div class="q-pa-md">
    <q-form
        @submit="onSubmit"
        @reset="exitToBooks"
        class="q-gutter-md"
    >
      <h3 v-if="isbn !== 'add'">Редактирование книги #{{ isbn }}</h3>
      <h3 v-else>Добавление книги</h3>

      <q-input
          filled
          v-model="isbn"
          label="ISBN"
      />

      <q-input
          filled
          v-model="name"
          label="Название"
      />

      <q-select
          filled
          v-model.number="author_id"
          emit-value
          map-options
          label="Автор"
          :options="authors"
      >
      </q-select>

      <q-input
          filled
          v-model="category"
          label="Жанр"
      />

      <q-input
          filled
          v-model="year"
          label="Год издания"
      />

      <div>
        <q-btn label="Сохранить" type="submit" color="primary"/>
        <q-btn label="Отмена" type="reset" color="primary" flat class="q-ml-sm"/>
      </div>
    </q-form>
  </div>
</template>

<style>
</style>

<script>
import {ref} from 'vue'
import { useRoute } from 'vue-router'
import store from '../store/index';

export default {
  name: 'BookPage',
  store,
  setup () {
    const route = useRoute();
    const isbn = ref(route.params.id);
    const name = ref(null);
    const author_id = ref(null);
    const category = ref(null);
    const year = ref(null);
    const authors = ref(null);
    let authorsArr = [];
    store.getters.authors.forEach((a) => {
      authorsArr.push({value: a.id, label: a.name});
    })
    authors.value = authorsArr;
    if (isbn.value !== 'add') {
      // update
      let book = store.getters.books.find((o) => {return o.isbn === isbn.value});
      name.value = book.name;
      author_id.value = +book.author_id;

      category.value = book.category;
      year.value = book.year;
    }

    return {
      authors,
      isbn,
      name,
      author_id,
      category,
      year,
    }
  },
  methods: {
    exitToBooks() {
      this.$router.push({name: 'books'});
    },
    onSubmit() {
      let authorName = '';
      this.authors.forEach((o) => {
        if (+o.value === +this.author_id) {
          authorName = o.label;
        }
      });
      let booksLoaded = store.getters.books;
      if (this.id !== 'add') {
        booksLoaded.forEach((o) => {
          if (o.isbn === this.isbn) {
            o.name = this.name;
            o.author_id = this.author_id;
            o.author = authorName;
            o.category = this.category;
            o.year = this.year;
          }
        });
      } else {
        booksLoaded.push({
          isbn: this.isbn,
          name: this.name,
          author_id: this.author_id,
          author: authorName,
          category: this.category,
          year: this.year,
        });
      }
      store.commit('booksSave', booksLoaded);
      this.$router.push({name: 'books'});
    }
  }
}
</script>
