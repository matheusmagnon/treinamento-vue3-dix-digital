<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <div class="row justify-between items-center">
        <div class="text-h6">Categorias</div>
        <q-btn label="Voltar"
          color="primary"
          no-caps
          @click="$router.back()" />
      </div>
      <div class="q-mt-md">
        <q-form @submit="handleSubmit">
          <FormPage :data="form" />
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import notify from 'src/composables/notify'
import FormPage from './FormPage.vue'
import { useStorageStore } from 'src/stores/storage'
import { useRouter, useRoute } from 'vue-router'

const store = useStorageStore()
const router = useRouter()
const route = useRoute()

const form = store.get('categories', route.params.id)

const handleSubmit = () => {
  try {
    const { message } = store.edit('categories', route.params.id, form)
    router.push({ name: 'categories' })
    notify.success(message)
  } catch ({ message }) {
    notify.error(message)
  }
}

</script>
