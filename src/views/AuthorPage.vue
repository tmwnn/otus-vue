<template>
  <div class="q-pa-md">
    <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
    >
      <h3 v-if="id !== 'add'">Редактирование автора #{{ id }}</h3>
      <h3 v-else>Добавление автора</h3>

      <q-input
          filled
          v-model="name"
          label="ФИО автора"
      />

      <q-input
          filled
          v-model="birthDate"
          label="Дата рождения"
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
import { ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'AuthorPage',
  data: () => {
    return {

    }
  },
  setup () {
    const route = useRoute();
    const id = route.params.id;
    const name = ref(null);
    const birthDate = ref(null);

    return {
      id,
      name,
      birthDate
    }
  },
  methods: {
    onReset() {
      this.$router.push({name: 'authors'});
    }
  }
}
</script>
