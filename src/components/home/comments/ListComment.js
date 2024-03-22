import axios from 'axios'

import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Delete, Edit } from '@mui/icons-material'

import React,
{
  useState,
  useEffect
} from 'react'

import {
  CardContent,
  Collapse,
  Typography,
  MenuItem,
  Divider
} from '@mui/material'

import {
  ExpandMore,
  DrawerMenu,
  StyledBoxComment,
  StyledContents,
  StyledDivMenu
} from './styles'

function FieldComment() {

  const [expanded, setExpanded] = useState(false)
  const [users, setUsers] = useState([])

  const [visibleUserDiv, setVisibleUserDiv] = useState(null);

  const toggleVisibility = (userId) => {
    setVisibleUserDiv(userId === visibleUserDiv ? null : userId);
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
        <CardContent sx={{ padding: '0px' }}>
          <br />
          {users.map(user => (

            <StyledBoxComment >

              <div style={{ display: 'flex', width: '100%' }} key={user._id}>
                <Typography fontWeight='bold'>Ezequiel</Typography>

                <StyledDivMenu style={{ position: 'relative' }}>
                  <MoreHorizIcon onClick={() => toggleVisibility(user._id)} sx={{ marginLeft: 'auto' }} />

                  {visibleUserDiv === user._id && (
                    <DrawerMenu>
                      <MenuItem sx={{fontSize:' 15px'}}
                        onClick={() => deleteUser(user._id)}
                      >
                        <Delete sx={{fontSize:' 20px', paddingRight:'5px'}}/>
                          Exluir
                      </MenuItem>
                      <MenuItem  sx={{fontSize:' 15px'}}
                        onClick={() => udateUser(user._id)}
                      >
                        <Edit sx={{fontSize:' 20px', paddingRight:'5px'}}/>
                        Editar
                      </MenuItem>
                    </DrawerMenu>
                  )}
                </StyledDivMenu>
              </div>
              <Typography>
                {user.comment}
              </Typography>
            </StyledBoxComment>

          ))}

        </CardContent>

      </Collapse>

    </div>
  )
}

export default FieldComment