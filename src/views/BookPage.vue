<template>
  <div class="q-pa-md">
    <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
    >
      <h3 v-if="id !== 'add'">Редактирование книги #{{ id }}</h3>
      <h3 v-else>Добавление книги</h3>

      <q-input
          filled
          v-model="name"
          label="Название"
      />

      <q-input
          filled
          v-model="author"
          label="Автор"
      />

      <q-input
          filled
          v-model="birthDate"
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
import { ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'BookPage',
  data: () => {
    return {

    }
  },
  setup () {
    const route = useRoute();
    const id = route.params.id;
    const name = ref(null);
    const author = ref(null);
    const year = ref(null);

    return {
      id,
      name,
      author,
      year
    }
  },
  methods: {
    onReset() {
      this.$router.push({name: 'authors'});
    }
  }
}
</script>
