<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <div class="row justify-between items-center">
        <div class="text-h6">Produtos</div>
        <q-btn label="Adicionar novo"
          color="primary"
          no-caps
          :to="{ name: 'products-create' }" />
      </div>
      <div class="q-mt-md">
        <q-table :rows="rows"
          :columns="columns"
          row-key="name"
          flat />
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const columns = [
  {
    label: 'ID',
    name: 'id',
    field: 'id',
    align: 'left',
    required: true,
    sortable: true
  },
  {
    label: 'Nome',
    name: 'name',
    field: 'name',
    align: 'center',
    required: true,
    sortable: true
  },
  {
    label: 'Descrição',
    name: 'description',
    field: 'description',
    align: 'center',
    required: true,
    sortable: true
  },
  {
    label: 'Dt.Criação',
    name: 'created_at',
    field: 'created_at',
    align: 'center',
    required: true,
    sortable: true
  },
  {
    label: 'Dt.Edição',
    name: 'updated_at',
    field: 'updated_at',
    align: 'center',
    required: true,
    sortable: true
  }
]

const rows = ref([
  {
    id: 1,
    name: 'Sapatos',
    description: 'Sapatos gerais',
    created_at: '2023-24-01',
    updated_at: '2023-24-01'
  }
])
</script>
