<template>
  <div class="q-pa-md">

    <div class="row">
      <div class="col q-pa-md">
        <q-input v-model.trim="filterName" label="Фильтр по ФИО" />
      </div>
      <div class="col q-pa-md">
        <q-input v-model.trim="filterCountry" label="Фильтр по стране" />
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

import { ref, computed } from 'vue';
import store from '../store/index';
import {columns} from "../hooks/authors";
import {useRouter} from "vue-router";

export default {
  name: 'Authors',
  store,
  setup () {
    const router = useRouter();
    let filterName = ref('');
    let filterCountry = ref('');
    let authors = ref(store.getters.authors);
    const filtredAuthors = computed(() => {
      return authors.value.filter((o) => {
        let checkName = !filterName.value || o.name.toLowerCase().includes(filterName.value.toLowerCase());
        let checkCountry = !filterCountry.value || o.country.toLowerCase().includes(filterCountry.value.toLowerCase());
        return checkName && checkCountry;
      });
    })
    const deleteAuthor = (id) => {
      authors.value = authors.value.filter((o) => {
        return o.id !== id;
      });
      store.commit('authorsSave', authors.value);
    }
    const addAuthor = () => {
      router.push({name: 'author_page', params: {id: 'add'}});
    }
    const editAuthor = (id) => {
      router.push({name: 'author_page', params: {id: id}});
    }
    return {
      addAuthor,
      editAuthor,
      deleteAuthor,
      filterName,
      filterCountry,
      columns,
      authors,
      filtredAuthors
    }
  },
}
</script>
