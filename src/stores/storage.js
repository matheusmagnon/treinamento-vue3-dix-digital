import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStorageStore = defineStore(
  'storage',
  () => {
    const users = ref([])
    const user = ref(null)
    const isLogged = ref(false)

    const register = (form) => {
      const exists = users.value.find(user => user.email === form.email)
      if (exists) {
        const error = { message: 'Email já em uso !' }
        throw error
      } else {
        users.value.push(form)
        const success = { message: 'Cadastro realizado com sucesso !' }
        return success
      }
    }

    const login = (form) => {
      const match = users.value.find(user => (user.email === form.email) && (user.password === form.password))
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

    return {
      users,
      user,
      isLogged,
      register,
      login,
      logout
    }
  },
  {
    persist: true
  }
)
