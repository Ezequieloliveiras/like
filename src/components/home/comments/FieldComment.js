
import React, { useState, useEffect, useRef } from 'react'
import { Collapse, Typography } from '@mui/material'
import { getUsers, deleteUser } from '@/app/api/apis/route'

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

  const [visibleUserDiv, setVisibleUserDiv] = useState(null) // inicialmente nenhum usuário visivel
  const [expanded, setExpanded] = useState(false) // campo expandido ou não
  const [users, setUsers] = useState([])
  const menuRef = useRef(null)

  const toggleVisibility = (userId) => { //verifica se o userId passado é igual ao visibleUserDiv atual.
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
      if (menuRef.current && !menuRef.current.contains(event.target)) { // verifica se o clique foi na referencia ou fora 
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

        <Typography sx={{ paddingTop:'1rem', paddingRight:'1rem',color:'#F5F5F5',}}
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

            <StyledBoxComment  key={user._id}>

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
                        Exluir
                      </StyledMenuItem>

                      <StyledMenuItem
                        onClick={() => updateUser(user._id)}
                      >
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

            </StyledBoxComment>

          ))}

        </StyledCardContent>

      </Collapse>

    </div>
  )
}

export default FieldComment