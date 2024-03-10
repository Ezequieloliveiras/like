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


  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/api/usuarios/${userId}`)
      // Atualizar a lista de usuários após a exclusão
      const updatedUsers = users.filter(user => user._id !== userId)
      setUsers(updatedUsers)
    } catch (error) {
      console.error("Erro ao excluir usuário:", error)
    }
  }
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
            <div key={user._id}>
              <Typography>
                <strong>Comentário:</strong> {user.comment}
              </Typography>
              <button onClick={() => deleteUser(user._id)}>Excluir</button>
            </div>
          ))}
        </CardContent>
      </Collapse>

    </div>
  )
}
//  Isso significa que o _id do usuário correspondente ao botão "Excluir" clicado será passado para a função deleteUser
export default Comments