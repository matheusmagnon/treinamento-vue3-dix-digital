<template>
  <div class="row q-col-gutter-md">

    <q-input v-model="form.name"
      class="col-md-6 col-xs-12"
      label="Nome"
      clearable
      maxlength="20"
      lazy-rules="ondemand"
      :rules="[val => !!val || 'Nome é obrigatório !']" />

    <q-input v-model="form.description"
      class="col-md-6 col-xs-12"
      label="Descrição"
      clearable
      maxlength="20"
      lazy-rules="ondemand"
      :rules="[val => !!val || 'Nome é obrigatório !']" />

    <div>
      <q-btn type="submit"
        label="Salvar"
        color="primary" />
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const form = computed({
  get () {
    return props.data
  },
  set (value) {
    emit('update:modelValue', value)
  }
})

</script>
