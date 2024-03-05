
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Card, Button } from '@mui/material'
import styled from 'styled-components'


const StyledButton = styled(Button)`
 && {

  font-size: 1em;
  margin: 1em;
  padding: 1em 1em;
  border-radius: 50px;
  background-color: aliceblue;
}

`;
const PageInitial = () => {
  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <Card>
            <StyledButton>
              Publique seu evento ou compartilhe um
            </StyledButton>
          </Card>
        </Box>
      </Container>
    </>
  )
}


export default PageInitial