import axios from 'axios'
import React, { useState, useEffect } from 'react'

import {
  CardContent,
  Collapse,
  Typography
} from '@mui/material'

import { ExpandMore } from './styles'

function Comments() {

  const [users, setUsers] = useState([])
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  useEffect(() => {
    async function Users() {
      try {
        const response = await axios.get('http://localhost:8080/api/usuarios')

        // Define a lista de usuários retornados pela API no estado 'users'
        setUsers(response.data)
      } catch (error) {
        console.error('Erro ao buscar usuários:', error)
      }
    }
    Users()
  }, [users]) // lista de dependências vazia significa que o efeito será executado somente após a primeira renderização do componente, o oposto é renderizar a cada muudança

  return (

    <div>

      <ExpandMore
        onClick={handleExpandClick}
        aria-expanded={expanded}
      >
        <Typography variant='subtitle2'>{users.length} comentários</Typography>
      </ExpandMore>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
         
            {users.map(user => (
              <Typography key={user.id}>
                <strong>Comentário:</strong> {user.comment},
              </Typography>
            ))}
     
        </CardContent>
      </Collapse>

    </div>
  )
}

export default Comments
