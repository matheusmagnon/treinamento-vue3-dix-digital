import { defineStore } from 'pinia'
import { ref } from 'vue'
import { date } from 'quasar'

export const useStorageStore = defineStore(
  'storage',
  () => {
    const users = ref([])
    const user = ref(null)
    const isLogged = ref(false)
    const database = ref({
      categories: [],
      producs: []
    })

    const register = (data) => {
      const exists = users.value.find(user => user.email === data.email)
      if (exists) {
        const error = { message: 'Email já em uso !' }
        throw error
      } else {
        users.value.push(data)
        const success = { message: 'Cadastro realizado com sucesso !' }
        return success
      }
    }

    const login = (data) => {
      const match = users.value.find(user => (user.email === data.email) && (user.password === data.password))
      if (!match) {
        const error = { message: 'Credenciais inválidas !' }
        throw error
      } else {
        user.value = match
        isLogged.value = true
        const success = { message: 'Login realizado com sucesso !' }
        return success
      }
    }

    const logout = () => {
      isLogged.value = false
    }

    const list = (table) => {
      return database.value[table]
    }

    const create = (tableName, data) => {
      let id = 1

      if (database.value[tableName].length) {
        const recordLast = database.value[tableName][database.value[tableName].length - 1]
        id = (recordLast.id + 1)
      }

      const timeStamp = Date.now()
      data.created_at = date.formatDate(timeStamp, 'YYYY-MM-DD HH:mm:ss')
      data.updated_at = date.formatDate(timeStamp, 'YYYY-MM-DD HH:mm:ss')
      data.id = id
      database.value[tableName].push(data)

      return { message: 'Criação do registro realizado com sucesso !' }
    }

    const get = (tableName, id) => {
      return database.value[tableName].find(item => parseInt(item.id) === parseInt(id))
    }

    const edit = (tableName, id, data) => {
      database.value[tableName] = database.value[tableName].filter(item => item.id !== id)

      const timeStamp = Date.now()
      data.updated_at = date.formatDate(timeStamp, 'YYYY-MM-DD HH:mm:ss')
      data.id = id

      database.value[tableName].push(data)

      return { message: 'Edição do registro realizado com sucesso !' }
    }

    const destroy = (tableName, id) => {
      database.value[tableName] = database.value[tableName].filter(item => item.id !== id)

      return { message: 'Registro deletado com sucesso !' }
    }

    return {
      users,
      user,
      isLogged,
      register,
      login,
      logout,
      database,
      list,
      create,
      get,
      edit,
      destroy
    }
  },
  {
    persist: true
  }
)
