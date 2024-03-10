import styled from 'styled-components'
import { TextareaAutosize } from '@mui/base'

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
    StyledTextareaAutosize
}