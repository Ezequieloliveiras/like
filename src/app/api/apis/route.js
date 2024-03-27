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

export async function updateUser(userId, editCommentText) {
  try {
    await axios.put(`https://like-api-restfull.onrender.com/api/usuarios/${userId}`, { comment: editCommentText }) // chave e valor

    // Aqui você pode atualizar o estado local ou buscar novamente os usuários da API, dependendo da sua implementação

  } catch (error) {
    console.error("Erro ao atualizar comentário:", error);
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