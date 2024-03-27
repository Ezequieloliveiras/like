import React, { useState, useEffect, useRef } from 'react'
import { Collapse, Typography } from '@mui/material'
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
  StyledDivMenu,
  StyledTextareaAutosizeEdit,
} from './styles'

function FieldComment() {

  const [visibleUserDiv, setVisibleUserDiv] = useState(null) // inicialmente nenhum usuário visível
  const [expanded, setExpanded] = useState(false) // campo expandido ou não
  const [users, setUsers] = useState([])
  const [editCommentText, setEditCommentText] = useState('') // estado para armazenar o texto do comentário editado
  const [editingUserId, setEditingUserId] = useState(null) // estado para armazenar o ID do usuário cujo comentário está sendo editado
  const menuRef = useRef(null)

  const toggleVisibility = (userId) => {
    setVisibleUserDiv(userId === visibleUserDiv ? null : userId) // se null invisible else userId  = visible
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

  const startEditing = (id, comment) => {
    setEditingUserId(id)
    setEditCommentText(comment)
  }

  const cancelEditing = () => {
    setEditingUserId(null) // quando for cancelada a edicao o campo sera null
    setEditCommentText('') // o campo de texto seja string vazia se for cancelado
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

                      <StyledMenuItem onClick={() => startEditing(user._id, user.comment)}>
                        <StyledEdit />
                        Editar
                      </StyledMenuItem>

                    </DrawerMenu>
                  )}
                </StyledDivMenu>

              </Container>


              {editingUserId === user._id ? (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <StyledTextareaAutosizeEdit
                    value={editCommentText}
                    onChange={(e) => setEditCommentText(e.target.value)}
                    placeholder="Digite o novo texto do comentário"
                  />
                  <div style={{ marginTop: '10px' }}>
                    <button
                      style={{ color: '#f5f5f5', background: 'none', border: 'none', outline:'none'  }}
                      onClick={() => updateComment(user._id)}
                    >
                      Salvar
                    </button>
                    <button
                      style={{ color: '#f5f5f5', background: 'none', border: 'none', outline:'none' }}
                      onClick={cancelEditing}
                    >
                      Cancelar
                    </button>
                  </div>

                </div>

              ) : (

                <Typography >
                  {user.comment}
                </Typography>
              )
              }

            </StyledBoxComment>

          ))}

        </StyledCardContent>

      </Collapse>

    </div>
  )
}

export default FieldComment
