import React, { useState } from 'react'

import SendIcon from '@mui/icons-material/Send'
import { ListItem } from '@mui/material'
import styled from 'styled-components'

const StyledInput = styled.input`
  border-radius: 50px;
  background-color: #f5f5f5;
  border: 1px solid #9e9e9e; 
  padding: 10px;
  margin-left: 10px;
  margin-bottom: 10px; 
`

const StyledButton = styled.button`
  background: none;
  border: none;
  padding-bottom: 10px ;
`

function Coment() {
  // Estado para armazenar o comentário
  const [comment, setComment] = useState('')
  // Estado para armazenar todos os comentários
  const [comments, setComments] = useState([])

  // Função para lidar com a submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault()
    // Adiciona o novo comentário no início da lista de comentários
    setComments([comment, ...comments])
    // Limpa o campo de comentário
    setComment('')
  }

  return (
    <div>
      <h1>Comentários</h1>
      {/* Formulário de comentário */}
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex' }}>
          <div>
            <StyledInput
              value={comment}
              onChange={(e) => setComment(e.target.value)} // onChange = (Em Mudança ) é chamado quando o usuário insere ou apaga algo - evento -> chamafuncao que atualiza o valor da comment para o novo valor digitado
              placeholder="Adicone seu comentário"
            />
          </div>
          <StyledButton type="submit">
            <SendIcon />
          </StyledButton>
        </div>
      </form>
      {/* Lista de comentários */}
      <div>
        {comments.map((comment, index) => ( // map itera sobre cada item do array e retorna um novo array com as modificacoes
          <ListItem key={index}>{comment}</ListItem>
        ))}
      </div>
    </div>
  )
}

export default Coment