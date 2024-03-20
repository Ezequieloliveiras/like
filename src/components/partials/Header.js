import { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import {
  Box,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
} from '@mui/material'

import {   
  StyledAppBar,
  StyledBoxAvatar,
  StyledConatiner,
  StyledToolbar,
  StyledTypography,
} from './StylesHeader'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function ResponsiveAppBar() {

  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <StyledAppBar position="static">
      <StyledConatiner maxWidth="xl" >
        <StyledToolbar disableGutters>
          <LocationOnIcon />
          <Box>
            <StyledTypography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
            >
              AURA
            </StyledTypography>
          </Box>

          <StyledBoxAvatar>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}
                  onClick={handleCloseUserMenu}
                >
                  <Typography
                    textAlign="center"
                  >{setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </StyledBoxAvatar>
        </StyledToolbar>
      </StyledConatiner>
    </StyledAppBar>
  )
}
export default ResponsiveAppBar
