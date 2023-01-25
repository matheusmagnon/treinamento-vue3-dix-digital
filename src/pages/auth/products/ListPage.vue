<!--
  Atividade: Finalizar CRUD de Produtos.

  Descrição: CRUD muito semelhante ao CRUD de categorias, com a diferença que
  na criação e edição do produto será necessário vincular o produto a uma categoria.

  --------------------------------------------------------------------------------------

  Componente de select do quasar: https://quasar.dev/vue-components/select#introduction

  Exemplo select de categorias:

  <q-select v-model="category_id"
  label="Categorias"
  option-value="id"
  option-label="name"
  :options="store.list('categories')"
  map-options
  emit-value
  lazy-rules="ondemand"
  :rules="[val => !!val || 'Categoria é obrigatória !']" />

  --------------------------------------------------------------------------------------

  Na listagem do produto será necessário formatar o valor da coluna da tabela pra exibir
  o nome da categoria com base no id da categoria vinculada ao produto.

  Componente de table do quasar: https://quasar.dev/vue-components/table#introduction

  Exemplo (Isso na definição das colunas da tabela):

  {
    label: 'Categoria',
    name: 'category_id',
    field: 'category_id',
    align: 'center',
    required: true,
    sortable: true,
    format: (val) => (store.get('categories', val).name)
  }

 -->

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
    </q-card>
  </q-page>
</template>

<script setup>
</script>
