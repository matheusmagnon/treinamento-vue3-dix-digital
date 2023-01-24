<template>
  <q-page padding
    class="flex flex-center">

    <q-card>
      <q-card-section>
        <div class="text-h6 text-center">Cadastro</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="handleSubmit"
          class="q-gutter-md"
          style="width: 500px;">

          <q-input label="Nome completo"
            clearable
            lazy-rules="ondemand"
            v-model="form.name"
            :rules="[
              val => !!val || 'Nome completo é obrigatório !',
              val => val.length <= 100 || 'Máximo 100 caracteres !',
            ]" />

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

          <q-input type="password"
            label="Confirmação de senha"
            clearable
            lazy-rules="ondemand"
            v-model="form.password_confirmation"
            :rules="[
              val => !!val || 'Senha é obrigatória !',
              val => val.length >= 8 || 'Minímo 8 caracteres !',
              val => val === form.password || 'A senha não corresponde !'
            ]" />

          <div class="q-gutter-md">
            <q-btn type="submit"
              label="Confirmar"
              color="primary" />
            <q-btn label="Voltar"
              color="secondary"
              @click="$router.back()" />
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
  name: null,
  email: null,
  password: null,
  password_confirmation: null
})

const handleSubmit = () => {
  try {
    const data = store.register(form.value)
    notify.success(data.message)
    router.push({ name: 'login' })
  } catch (error) {
    notify.error(error.message)
  }
}
</script>
