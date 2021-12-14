<template>
  <div class="q-pa-md">

    <div class="row">
      <div class="col q-pa-md">
        <q-input v-model.trim="filterName" label="Фильтр по названию" />
      </div>
      <div class="col q-pa-md">
        <q-input v-model.trim="filterAuthor" label="Фильтр по автору" />
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
import { ref, computed } from 'vue';
import store from '../store/index';
import { columns } from "../hooks/books";
import { useRouter } from 'vue-router'
export default {
  name: 'Books',
  store,
  setup () {
    const router = useRouter();
    let filterName = ref('');
    let filterAuthor = ref('');
    let books = ref(store.getters.books);
    const filtredBooks = computed(() => {
      return books.value.filter((o) => {
        let checkName = !filterName.value || o.name.toLowerCase().includes(filterName.value.toLowerCase());
        let checkCountry = !filterAuthor.value || o.author.toLowerCase().includes(filterAuthor.value.toLowerCase());
        return checkName && checkCountry;
      });
    })
    const deleteBook = (isbn) => {
      books.value = books.value.filter(function(o) {
        return o.isbn !== isbn;
      });
      store.commit('booksSave', books.value);
    }
    const addBook = () => {
      router.push({name: 'book_page', params: {id: 'add'}});
    }
    const editBook = (isbn) => {
      router.push({name: 'book_page', params: {id: isbn}});
    }
    return {
      addBook,
      editBook,
      deleteBook,
      filterName,
      filterAuthor,
      columns,
      books,
      filtredBooks
    }
  },
}
</script>
