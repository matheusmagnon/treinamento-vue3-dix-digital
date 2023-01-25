<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <div class="row justify-between items-center">
        <div class="text-h6">Categorias</div>
        <q-btn label="Adicionar novo"
          color="primary"
          no-caps
          :to="{ name: 'categories-create' }" />
      </div>
      <div class="q-mt-md">
        <q-table :rows="store.database['categories']"
          :columns="columns"
          row-key="name"
          flat>
          <template v-slot:body-cell-actions="props">
            <q-td :props="props"
              class="q-gutter-x-sm">
              <q-btn icon="mdi-pencil-outline"
                color="info"
                dense
                @click="handleEdit(props.row)">
                <q-tooltip>Editar</q-tooltip>
              </q-btn>
              <q-btn icon="mdi-delete-outline"
                color="negative"
                dense
                @click="handleDestroy(props.row)">
                <q-tooltip>Excluir</q-tooltip>
              </q-btn>
            </q-td>
          </template>
        </q-table>
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { useStorageStore } from 'src/stores/storage'
import notify from 'src/composables/notify'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const store = useStorageStore()
const $q = useQuasar()
const router = useRouter()

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
  },
  {
    label: 'Ações',
    name: 'actions',
    field: 'actions',
    align: 'right'
  }
]

const handleEdit = (category) => {
  router.push({ name: 'categories-edit', params: { id: category.id } })
}

const handleDestroy = (category) => {
  $q.dialog({
    title: 'Confirmar',
    message: `Você deseja deletar a ${category.name}?`,
    cancel: true,
    persistent: true
  }).onOk(() => {
    try {
      const { message } = store.destroy('categories', category.id)
      notify.success(message)
    } catch ({ message }) {
      notify.error(message)
    }
  })
}
</script>
