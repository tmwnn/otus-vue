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

      <q-input
          filled
          v-model="country"
          label="Страна"
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
import {authorsLoaded, authorsSave} from '../hooks/authors.js';

export default {
  name: 'AuthorPage',
  setup () {
    const route = useRoute();
    const id = route.params.id;
    const name = ref(null);
    const birthDate = ref(null);
    const country = ref(null);

    if (id !== 'add') {
      // update
      let author = authorsLoaded.find((o) => {return o.id === +id});
      name.value = author.name;
      birthDate.value = author.birth_date;
      country.value = author.country;
    }

    return {
      id,
      name,
      birthDate,
      country
    }
  },
  methods: {
    onReset() {
      this.$router.push({name: 'authors'});
    },
    onSubmit() {
      if (this.id !== 'add') {
        authorsLoaded.forEach((o) => {
          if (o.id === +this.id) {
            o.name = this.name;
            o.country = this.country;
            o.birth_date = this.birthDate;
          }
        });
      } else {
        let maxid = 0;
        authorsLoaded.forEach((o) => {maxid = maxid > o.id ? maxid : o.id});
        maxid++;
        authorsLoaded.push({
          id: maxid,
          name: this.name,
          country: this.country,
          birth_date: this.birthDate,
        });
      }
      authorsSave(authorsLoaded);
      this.$router.push({name: 'authors'});
    }
  }
}
</script>
