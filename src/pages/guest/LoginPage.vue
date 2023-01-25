<template>
  <q-page padding
    class="flex flex-center">

    <q-card>
      <q-card-section>
        <div class="text-h6 text-center">Login</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="handleSubmit"
          class="q-gutter-md"
          style="width: 500px;">

          <q-input label="Email"
            clearable
            lazy-rules="ondemand"
            v-model="form.email"
            :rules="[
              val => !!val || 'Email é obrigatório !',
              val => val.length <= 100 || 'Máximo 100 caracteres !',
            ]" />

          <q-input type="password"
            label="Senha"
            clearable
            lazy-rules="ondemand"
            v-model="form.password"
            :rules="[
              val => !!val || 'Senha é obrigatória !',
              val => val.length >= 8 || 'Minímo 8 caracteres !',
            ]" />

          <div>
            <q-btn type="submit"
              label="Entrar"
              color="primary"
              class="q-mr-md" />
            <q-btn label="Cadastro"
              color="secondary"
              :to="{ name: 'register' }" />
          </div>

        </q-form>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import notify from 'src/composables/notify'
import { useStorageStore } from 'src/stores/storage'
import { useRouter } from 'vue-router'

const store = useStorageStore()
const router = useRouter()

const form = ref({
  email: null,
  password: null
})

const handleSubmit = () => {
  try {
    store.login(form.value)
    router.push({ name: 'home' })
  } catch ({ message }) {
    notify.error(message)
  }
}
</script>
