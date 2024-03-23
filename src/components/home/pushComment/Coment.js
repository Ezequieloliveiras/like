import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send'
import { createComment } from '@/app/api/apis/route'

import {
  StyledTextareaAutosize,
  StyledButton,
} from './styles'

function Comment() {
  
  // Estado para armazenar o comentário
  const [comment, setComment] = useState('')
  // Estado para armazenar todos os comentários
 
  // Função para lidar com a submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // Envia o comentário para a API usando a função createComment
      await createComment(comment)

      // Limpa o campo de comentário
      setComment('')

      console.log("Comentário enviado com sucesso!") // Exibe a resposta da API no console
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
          <StyledButton type="submit" >
            <SendIcon />
          </StyledButton>
        </div>
      </form>
    </div>
  )
}

export default Comment
