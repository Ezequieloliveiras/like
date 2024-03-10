import styled from 'styled-components'
import { TextareaAutosize } from '@mui/base'
import Menu from '@mui/material/Menu';
import { grey } from '@mui/material/colors';


const StyledMenu = styled((props) => (
    props.open && ( // Verifica se a propriedade 'open' é verdadeira
      <Menu
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        {...props}
      />
    )
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: 10,
      minWidth: 180,
      color: grey,
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: 'grey',
          marginRight: 10,
        },
        '&:active': {
          backgroundColor: '#ffffff',
        },
      },
    },
  }))


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
   marginBottom:'10px',
    color: '#616161',
}));

export {
    ExpandMore,
    StyledButton,
    StyledTextareaAutosize,
    StyledMenu
}