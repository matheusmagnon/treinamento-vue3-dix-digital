<!-- <template>
  <q-page padding>
    <q-card class="q-pa-md">
      <div class="row justify-between items-center">
        <div class="text-h6">Produtos</div>
        <q-btn label="Voltar"
          color="primary"
          no-caps
          @click="$router.back()" />
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
</script> -->

<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <div class="row justify-between items-center">
        <div class="text-h6">Produtos</div>
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
import { ref } from 'vue'
import FormPage from './FormPage.vue'
import { useStorageStore } from 'src/stores/storage'
import { useRouter } from 'vue-router'

const store = useStorageStore()
const router = useRouter()

const form = ref({
  name: null,
  description: null
})

const handleSubmit = () => {
  try {
    const { message } = store.create('products', form.value)
    router.push({ name: 'products' })
    notify.success(message)
  } catch ({ message }) {
    notify.error(message)
  }
}

</script>
