import axios from 'axios'

import React, { useState, useEffect, useRef } from 'react'

import { Collapse, Typography } from '@mui/material'

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

  const [expanded, setExpanded] = useState(false)
  const [users, setUsers] = useState([])

  const [visibleUserDiv, setVisibleUserDiv] = useState(null)

  const menuRef = useRef(null)

  const toggleVisibility = (userId) => {
    setVisibleUserDiv(userId === visibleUserDiv ? null : userId)
  }
  
  const handleExpandClick = () => {
    if (users.length > 0) {
      setExpanded(!expanded)
    }
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
  }, [users]) // com users atualiza sempre o estado
  
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/usuarios/${id}`)
      // Atualizar a lista de usuários após a exclusão
      setUsers(users.filter(user => user._id !== id))
      
    } catch (error) {
      console.error("Erro ao excluir usuário:", error)
    }
  }
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setVisibleUserDiv(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])


  return (
    
    <div style={{ padding: 'none' }}>

      <ExpandMore
        onClick={handleExpandClick}
        aria-expanded={expanded}
      >

        <Typography
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

            <StyledBoxComment >

              <Container key={user._id}>

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
                        onClick={() => deleteUser(user._id)}
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

              <Typography>
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