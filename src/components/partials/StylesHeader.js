import styled from 'styled-components'

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Container,
} from '@mui/material'

const StyledConatiner = styled(Container)`
  && {
  @media (min-width:769px) {
    width:65%
  }
}
`
const StyledTypography = styled(Typography)`
  && {
    font-family: monospace;
    font-weight: 700;
    letter-spacing: .3rem;
    color: inherit;
    text-decoration: none;
    display: flex;
  }
`
const StyledToolbar = styled(Toolbar)`
  && {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`
const StyledAppBar = styled(AppBar)`
  && {
    background-color: #1A237E;
  }
`
const StyledBoxAvatar = styled(Box)`
  && {
    flex-grow: 0;
  }
`

export {
  StyledAppBar,
  StyledBoxAvatar,
  StyledConatiner,
  StyledToolbar,
  StyledTypography,
}