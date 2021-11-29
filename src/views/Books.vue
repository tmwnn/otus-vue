<template>
  <div class="q-pa-md">

    <div class="row">
      <div class="col q-pa-md">
        <q-input v-model="filterName" label="Фильтр по названию" />
      </div>
      <div class="col q-pa-md">
        <q-input v-model="filterAuthor" label="Фильтр по автору" />
      </div>
    </div>


    <q-table
        title="Список книг"
        :rows="filtredBooks"
        :columns="columns"
        row-key="name"
    >
      <template v-slot:body-cell-action="row">
        <q-td>
          <q-icon name="edit" class="q-mr-md" @click="editBook(row.row.isbn)"/>
          <q-icon name="delete" @click="deleteBook(row.row.isbn)"/>
        </q-td>
      </template>
    </q-table>
    <div class="q-pt-lg">
      <q-btn color="primary" label="Добавить" @click="addBook" />
    </div>

  </div>
</template>

<style>
</style>

<script>
const columns = [
  { name: 'isbn', label: 'ISBN', field: 'isbn', sortable: true, align: 'left' },
  {
    name: 'name',
    required: true,
    label: 'Название',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'author', label: 'Aвтор', field: 'author', sortable: true, align: 'left' },
  { name: 'category', label: 'Категория', field: 'category', sortable: true, align: 'left' },
  { name: 'year', align: 'center', label: 'Год издания', field: 'year', sortable: true },
  { name: 'action', align: 'right', label: '', field: '' },
]
import { ref, computed } from 'vue';
import {booksLoaded, booksSave} from '../hooks/books.js';
import {authorsLoaded} from '../hooks/authors.js';
booksLoaded.forEach((book) => {
  book.author = authorsLoaded.find(o => +o.id === +book.author_id).name;
});


export default {
  name: 'Books',
  setup () {
    let filterName = ref('');
    let filterAuthor = ref('');
    let books = ref(booksLoaded);
    const filtredBooks = computed(() => {
      return books.value.filter((o) => {
        let checkName = !filterName.value || o.name.toLowerCase().includes(filterName.value.toLowerCase().trim());
        let checkCountry = !filterAuthor.value || o.author.toLowerCase().includes(filterAuthor.value.toLowerCase().trim());
        return checkName && checkCountry;
      });
    })
    const deleteBook = (isbn) => {
      books.value = books.value.filter(function(o) {
        return o.isbn !== isbn;
      });
      booksSave(books.value);
    }
    return {
      deleteBook,
      filterName,
      filterAuthor,
      columns,
      books,
      filtredBooks
    }
  },
  methods: {
    addBook() {
      this.$router.push({name: 'book_page', params: {id: 'add'}});
    },
    editBook(isbn) {
      this.$router.push({name: 'book_page', params: {id: isbn}});
    },

  }
}
</script>
