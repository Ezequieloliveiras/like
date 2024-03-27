import React, { useState, useEffect, useRef } from 'react'
import { Collapse, Typography, TextField, Button } from '@mui/material'
import { getUsers, deleteUser, updateUser } from '@/app/api/apis/route'

import {
  StyledCardContent,
  ExpandMore,
  Container,
  DrawerMenu,
  StyledMenuItem,
  StyledMoreHorizIcon,
  StyledDelete,
  StyledEdit,
  StyledBoxComment,
  StyledDivMenu
} from './styles'

function FieldComment() {

  const [visibleUserDiv, setVisibleUserDiv] = useState(null) // inicialmente nenhum usuário visível
  const [expanded, setExpanded] = useState(false) // campo expandido ou não
  const [users, setUsers] = useState([])
  const [editCommentText, setEditCommentText] = useState('') // estado para armazenar o texto do comentário editado
  const [editingUserId, setEditingUserId] = useState(null) // estado para armazenar o ID do usuário cujo comentário está sendo editado
  const menuRef = useRef(null)

  const toggleVisibility = (userId) => {
    setVisibleUserDiv(userId === visibleUserDiv ? null : userId)
  }

  const handleExpandClick = () => {
    if (users.length > 0) {
      setExpanded(!expanded)
    }
  }

  const deleteComment = async (id) => {
    try {
      await deleteUser(id)
      setUsers(users.filter(user => user._id !== id))
    } catch (error) {
      console.error('Erro ao excluir comentário:', error)
    }
  }

  const updateComment = async (id) => {
    try {
      // Verifica se o comentário existe antes de atualizá-lo
      const userToUpdate = users.find(user => user._id === id);
      if (!userToUpdate) {
        console.error('Erro ao editar comentário: o comentário não existe.');
        return;
      }

      await updateUser(id, editCommentText)
      setUsers(users.map(user => user._id === id ? { ...user, comment: editCommentText } : user))
      setEditingUserId(null) // Limpa o ID do usuário que está sendo editado
      setEditCommentText('') // Limpa o texto do comentário editado
    } catch (error) {
      console.error('Erro ao editar comentário:', error)
    }
  }

  useEffect(() => {
    async function listComment() {
      try {
        const usersData = await getUsers() // Chama a função getUsers 
        setUsers(usersData)
      } catch (error) {
        console.error('Erro ao buscar usuários:', error)
      }
    }
    listComment()
  }, [users])

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) { // verifica se o clique foi na referência ou fora 
        setVisibleUserDiv(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside) // adiciona o evento 
    return () => {
      document.removeEventListener("mousedown", handleClickOutside) // remove o evento
    }
  }, [])


  return (

    <div style={{ padding: 'none' }}>

      <ExpandMore
        onClick={handleExpandClick}
        aria-expanded={expanded}
      >

        <Typography sx={{ paddingTop: '1rem', paddingRight: '1rem', color: '#F5F5F5', }}
          variant='subtitle2'
        >
          {users.length} comentários
        </Typography>

      </ExpandMore>

      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <StyledCardContent >
          <br />
          {users.map(user => (

            <StyledBoxComment key={user._id}>

              <Container>

                <Typography
                  fontWeight='bold'
                >
                  Ezequiel
                </Typography>

                <StyledDivMenu >

                  <StyledMoreHorizIcon

                    onClick={() => toggleVisibility(user._id)}
                  />

                  {visibleUserDiv === user._id && (
                    <DrawerMenu ref={menuRef}>

                      <StyledMenuItem
                        onClick={() => deleteComment(user._id)}
                      >
                        <StyledDelete />
                        Excluir
                      </StyledMenuItem>

                      <StyledMenuItem>
                        <StyledEdit />
                        Editar
                      </StyledMenuItem>

                    </DrawerMenu>
                  )}
                </StyledDivMenu>

              </Container>

              <Typography >
                {user.comment}
              </Typography>
              <div>
                  <TextField
                    value={editCommentText}
                    onChange={(e) => setEditCommentText(e.target.value)}
                    placeholder="Digite o novo texto do comentário"
                  />
                  <Button onClick={() => updateComment(user._id)}>Salvar</Button>

              </div>

            </StyledBoxComment>

          ))}

        </StyledCardContent>

      </Collapse>

    </div>
  )
}

export default FieldComment
