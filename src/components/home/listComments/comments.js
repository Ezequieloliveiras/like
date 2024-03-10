import axios from 'axios'
import React, { useState, useEffect } from 'react'

import {
  CardContent,
  Collapse,
  Typography,
  Box
} from '@mui/material'

import MenuItem from '@mui/material/MenuItem'
import EditIcon from '@mui/icons-material/Edit'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Delete } from '@mui/icons-material'

import { ExpandMore, StyledMenu } from './styles'

function Comments() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const [users, setUsers] = useState([])

  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
  }, [users]) // com users atualiza sempre o estado

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/api/usuarios/${userId}`)
      // Atualizar a lista de usuários após a exclusão
      const updatedUsers = users.filter(user => user._id !== userId)

      setUsers(updatedUsers)
      handleClose()

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

            <Box sx={{
              border: '1px solid #9e9e9e',
              borderRadius: '5px',
              padding: '10px',
            }} key={user._id}>

              <div style={{ display: 'flex' }}>

                <Typography>Ezequiel</Typography>

                <div style={{ width: '100%', display: 'flex' }}>

                  <MoreHorizIcon sx={{ marginLeft: 'auto' }}
                    position="relative"
                    id="demo-customized-button"
                    aria-controls={open ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                  >

                  </MoreHorizIcon>

                  <StyledMenu
                    position="absolute"
                    id="demo-customized-menu"
                    MenuListProps={{
                      'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose} disableRipple>
                      <EditIcon />
                      Edit
                    </MenuItem>
                    <MenuItem onClick={() => deleteUser(user._id)} >
                      <Delete />
                      Exluir
                    </MenuItem>

                  </StyledMenu>
                </div>
              </div>
              <div>
                <Typography>

                  {user.comment}
                </Typography>
              </div>
            </Box>
          ))}
        </CardContent>
      </Collapse>

    </div>
  )
}

export default Comments