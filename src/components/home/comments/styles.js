
import styled from 'styled-components'
import { TextareaAutosize } from '@mui/base'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import { Box, Menu, CardContent, MenuItem } from '@mui/material'
import { Delete, Edit} from '@mui/icons-material'

const StyledCardContent = styled(CardContent)`
  padding: 0px;
`

const StyledTextareaAutosize = styled(TextareaAutosize)`
    resize: none;
    border-radius: 20px;
    background-color: #f5f5f5;
    border: 1px solid #9e9e9e; 
    padding: 10px;
    margin-left: 10px;
    margin-bottom: 10px; 
    width: 100%;
    font-family: sans-serif;
    font-size: 15px;
`

const Container = styled.div`
  display: flex;
  width: 100% ;
`

const DrawerMenu = styled.div`
    position: absolute;
    margin-top: 20px;
    margin-left: auto;
    right: 3%;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px black;
    z-index: 9999;    
`
const StyledMenuItem = styled(MenuItem)`
  font-size: 15px;
`
const StyledDelete = styled(Delete)`
  font-size: 20px;
  padding-right:5px;
`
const StyledEdit = styled(Edit)`
  font-size: 20px;
  padding-right:5px;
`

const StyledBoxComment = styled(Box)`
  border: 1px solid #9e9e9e;
  border-radius: 20px;
  padding: 10px;
  margin: 0px 10px 40px 10px;
`

const StyledDivMenu = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`

const StyledMoreHorizIcon = styled(MoreHorizIcon)`
  margin-left: auto;
`

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <button {...other} />
})(() => ({
  display: 'flex',
  marginLeft: 'auto',
  background: 'none',
  border: 'none',
  marginBottom: '10px',
  color: '#616161',
}));


export {
  ExpandMore,
  Container,
  DrawerMenu,
  StyledMenuItem,
  StyledCardContent,
  StyledTextareaAutosize,
  StyledMoreHorizIcon,
  StyledDelete,
  StyledEdit,
  StyledBoxComment,
  StyledDivMenu,
}