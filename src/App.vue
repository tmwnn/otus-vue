<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Otus vue app
        </q-toolbar-title>
        <q-tabs align="left" shrink>
          <q-route-tab :to="{ name: 'home'}"  label="Главная" />
          <q-route-tab :to="{ name: 'books'}" label="Список книг" />
          <q-route-tab :to="{ name: 'authors'}" label="Список авторов" />
        </q-tabs>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LayoutDefault',
  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
