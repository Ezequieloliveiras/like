import styled from 'styled-components'
import { TextareaAutosize } from '@mui/base'


const StyledTextareaAutosize = styled(TextareaAutosize)`
    resize: none;
    border-radius: 20px;
    background-color: #424242;
    color: #ffffff;
    border: 1px solid #9e9e9e; 
    padding: 10px;
    margin-left: 10px;
    width: 90%;
    font-family: sans-serif;
    font-size: 15px;
    input:focus {
      outline: none;
    }
    @media only screen and (max-width: 768px) {
      input {
      outline: none;
    }
}
`

const StyledButton = styled.button`
    && {
    display: flex;
    align-items: center;
    justify-content:center;
    background-color: #000000;
    color: #ffffff;
    border-radius: 50%;
    margin: 0px 5px 0px 5px;
    height: 38px;
    width: 38px;
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