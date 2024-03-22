import styled from 'styled-components'
import { TextareaAutosize } from '@mui/base'
import { grey } from '@mui/material/colors'
import { Box, Menu } from '@mui/material'

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

const StyledButton = styled.button`
  background: none;
  border: none;
  padding-bottom: 10px ;
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

const DrawerMenu = styled.div`
    position: absolute;
    margin-top: 20px;
    margin-left: auto;
    right: 3%;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px black;
    z-Index: 1  ;    
`

const StyledBoxComment = styled(Box)`
  border: 1px solid #9e9e9e;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
`

const StyledContents = styled(Box)`
  display: flex;
`

const StyledDivMenu = styled.div`
  width: 100%;
  display: flex;
`

export {
  ExpandMore,
  StyledButton,
  StyledTextareaAutosize,
  DrawerMenu,
  StyledBoxComment,
  StyledContents,
  StyledDivMenu,
}