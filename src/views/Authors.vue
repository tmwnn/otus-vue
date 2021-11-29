<template>
  <div class="q-pa-md">

    <div class="row">
      <div class="col q-pa-md">
        <q-input v-model="filterName" label="Фильтр по ФИО" />
      </div>
      <div class="col q-pa-md">
        <q-input v-model="filterCountry" label="Фильтр по стране" />
      </div>
    </div>

    <q-table
        title="Список авторов"
        :rows="filtredAuthors"
        :columns="columns"
        row-key="name"
    >
      <template v-slot:body-cell-action="row">
        <q-td>
          <q-icon name="edit" class="q-mr-md" @click="editAuthor(row.row.id)"/>
          <q-icon name="delete" @click="deleteAuthor(row.row.id)"/>
        </q-td>

      </template>
    </q-table>
    <div class="q-pt-lg">
      <q-btn color="primary" label="Добавить" @click="addAuthor" />
    </div>

  </div>
</template>

<style>
</style>

<script>
const columns = [
  { name: 'id', align: 'center', label: 'ID', field: 'id', sortable: true },
  {
    name: 'name',
    required: true,
    label: 'ФИО',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'country', align: 'left', label: 'Страна', field: 'country', sortable: true },
  { name: 'birth_date', align: 'center', label: 'Дата рождения', field: 'birth_date', sortable: true },
  { name: 'action', align: 'right', label: '', field: '' },
]

import {authorsLoaded, authorsSave} from '../hooks/authors.js';
import { ref, computed } from 'vue';

export default {
  name: 'Authors',
  setup () {
    let filterName = ref('');
    let filterCountry = ref('');
    let authors = ref(authorsLoaded);
    const filtredAuthors = computed(() => {
      return authors.value.filter((o) => {
        let checkName = !filterName.value || o.name.toLowerCase().includes(filterName.value.toLowerCase().trim());
        let checkCountry = !filterCountry.value || o.country.toLowerCase().includes(filterCountry.value.toLowerCase().trim());
        return checkName && checkCountry;
      });
    })
    const deleteAuthor = (id) => {
      authors.value = authors.value.filter(function(o) {
        return o.id !== id;
      });
      authorsSave(authors.value);
    }
    return {
      deleteAuthor,
      filterName,
      filterCountry,
      columns,
      authors,
      filtredAuthors
    }
  },
  methods: {
    addAuthor() {
      this.$router.push({name: 'author_page', params: {id: 'add'}});
    },
    editAuthor(id) {
      this.$router.push({name: 'author_page', params: {id: id}});
    },

  }
}
</script>
