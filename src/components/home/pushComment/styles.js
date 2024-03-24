import styled from 'styled-components'
import { TextareaAutosize } from '@mui/base'
import Button from '@mui/material/Button';

const StyledTextareaAutosize = styled(TextareaAutosize)`
    resize: none;
    border-radius: 20px;
    background-color: #f5f5f5;
    border: 1px solid #9e9e9e; 
    padding: 7px;
    margin-left: 10px;
    margin-bottom: 10px; 
    width: 90%;
    font-family: sans-serif;
    font-size: 15px;
`

const StyledButton = styled.button`
&& {
    display: flex;
            align-items: center;
            justify-content:center;
            background-color: #000000;
            color: #ffffff;
            padding: 5px;
            border-radius: 50%;
            margin-left: 5px;
            height: 30px;
            width:30px;
    
}
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