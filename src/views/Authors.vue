<template>
  <div class="q-pa-md">
    <q-table
        title="Список авторов"
        :rows="rows"
        :columns="columns"
        row-key="name"
    />
    <div class="q-pt-lg">
      <q-btn color="primary" label="Добавить" @click="addAuthor" />
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
    label: 'ФИО',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'birth_date', align: 'center', label: 'Дата рождения', field: 'birth_date', sortable: true },
]

const rows = [
  {
    name: 'Артур Конан Дойль',
    birth_date: '22.05.1859',
  },
];


export default {
  name: 'Authors',
  setup () {
    return {
      columns,
      rows
    }
  },
  methods: {
    addAuthor() {
      this.$router.push({name: 'author_page', params: {id: 'add'}});
    },
  }
}
</script>
