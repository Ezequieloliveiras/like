import React, { useState } from 'react'

import {
  CardContent,
  Collapse,
  Typography
} from '@mui/material'

import SendIcon from '@mui/icons-material/Send'

import {
  StyledTextareaAutosize,
  StyledButton,
  ExpandMore
} from './styles'

function Coment() {

  // Estado para armazenar o comentário
  const [comment, setComment] = useState('')
  // Estado para armazenar todos os comentários
  const [comments, setComments] = useState([])

  // controle de abertura dos comentários
  const [expanded, setExpanded] = useState(false)

  // função que clique adiciona novo estado
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

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

      {/* Formulário de comentário */}
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex' }}>

          <StyledTextareaAutosize
            type='text'
            value={comment}
            onChange={(e) => setComment(e.target.value)} // onChange = (Em Mudança ) é chamado quando o usuário insere ou apaga algo - evento -> chamafuncao que atualiza o valor da comment para o novo valor digitado
            placeholder="Adicone seu comentário"
          />
          
          <StyledButton type="submit">
            <SendIcon />
          </StyledButton>

        </div>
      </form>
      <div style={{paddingRight:'50px'}}>

        {/* Lista de comentários */}
        <ExpandMore
          onClick={handleExpandClick}
          aria-expanded={expanded}
          disableTouchRipple
        >
          <Typography variant='subtitle2'>{comments.length} comentários</Typography>
        </ExpandMore>
      </div>

      <div>
        {comments.map((comment, index) => ( // map itera sobre cada item do array e retorna um novo array com as modificacoes
          <Collapse in={expanded} timeout="auto" unmountOnExit >
            <CardContent>
              <Typography paragraph key={index}>{comment}</Typography>
            </CardContent>
          </Collapse>
        ))}
      </div>

    </div>
  )
}

export default Coment