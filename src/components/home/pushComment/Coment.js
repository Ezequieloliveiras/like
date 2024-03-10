import React, { useState } from 'react'
import axios from 'axios'

import SendIcon from '@mui/icons-material/Send'

import {
  StyledTextareaAutosize,
  StyledButton,
} from './styles'

function Coment() {
  // Estado para armazenar o comentário
  const [comment, setComment] = useState('')
  // Estado para armazenar todos os comentários
  const [comments, setComments] = useState([])

  // Função para lidar com a submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // Envia o comentário para a API
      const response = await axios.post("http://localhost:8080/api/usuarios", { comment })
      
      // Adiciona o novo comentário na lista de comentários
      setComments([comment, ...comments])
      // Limpa o campo de comentário
      setComment('')

      console.log(response) // Exibe a resposta da API no console
    } catch (error) {
      console.error('Erro ao enviar o comentário:', error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex' }}>
          <StyledTextareaAutosize
            name='comment'
            type='text'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comente sobre o evento"
          />
          <StyledButton type="submit">
            <SendIcon />
          </StyledButton>
        </div>
      </form>
    </div>
  )
}

export default Coment
