<template>
  <q-page padding>
    <div class="text-h6">
      Seja bem vindo {{ store.user.name }} !
    </div>
  </q-page>
</template>

<script setup>
import { useStorageStore } from 'src/stores/storage'
const store = useStorageStore()
</script>
