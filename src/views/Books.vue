<template>
  <div class="q-pa-md">
    <q-table
        title="Список книг"
        :rows="rows"
        :columns="columns"
        row-key="name"
    />
    <div class="q-pt-lg">
      <q-btn color="primary" label="Добавить" @click="addBook" />
    </div>

  </div>
</template>

<style>
</style>

<script>
const columns = [
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
  { name: 'year', align: 'center', label: 'Год издания', field: 'year', sortable: true },
]

const rows = [
  {
    name: 'Приключения Шерлока Холмса',
    author: 'Артур Конан Дойль',
    year: 1887,
  },
];


export default {
  name: 'Books',
  setup () {
    return {
      columns,
      rows
    }
  },
  methods: {
    addBook() {
      this.$router.push({name: 'book_page', params: {id: 'add'}});
    },
  }
}
</script>
