<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Curso Vue 3 por Dix Digital
        </q-toolbar-title>

        <q-btn-dropdown flat
          color="white"
          icon="person">
          <q-list>
            <q-item clickable
              v-close-popup
              @click="handleLogout">
              <q-item-section>
                <q-item-label>Sair</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen"
      show-if-above
      bordered>
      <q-list>
        <q-item-label header>
          Menu
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useStorageStore } from 'src/stores/storage'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStorageStore()

const essentialLinks = [
  {
    title: 'Painel',
    icon: 'home',
    link: 'home'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function handleLogout () {
  store.logout()
  router.push({ name: 'login' })
}

</script>
