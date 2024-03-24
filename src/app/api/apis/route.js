// api.js

import axios from 'axios'

export async function getUsers() {
  try {
    const response = await axios.get('https://like-api-restfull.onrender.com/api/usuarios')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar usuários:', error)
    throw error // Você pode optar por lançar o erro para que ele seja tratado onde quer que a função seja chamada.
  }
}

export async function deleteUser(id) {
  try {
    await axios.delete(`https://like-api-restfull.onrender.com/api/usuarios/${id}`)
    // Atualizar a lista de usuários após a exclusão
    
  } catch (error) {
    console.error("Erro ao excluir usuário:", error)
  }
}

export async function createComment(comment) {
  try {
    await axios.post('https://like-api-restfull.onrender.com/api/usuarios', {comment})

    // Atualizar a lista de usuários após a exclusão
    
  } catch (error) {
    console.error("Erro ao excluir usuário:", error)
  }
}