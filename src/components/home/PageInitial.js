import styled from 'styled-components'
import Card from './card/Card'

import {
  Container,
  Grid,
} from '@mui/material'

import Carousel from './carousel/Carousel'

const StyledConatiner = styled(Container)`

 && { 
    padding-top: 50px;
     padding-bottom: 50px;
     padding-left: 0px;
    padding-right: 0px;
  }

`
const PageInitial = () => {
  return (
    <>
      <StyledConatiner maxWidth='md'>
        <Carousel />
        <Grid container spacing={1} sx={{
          display: 'flex', justifyContent: 'center', paddingLeft: '0px',
          paddingRight: '0px'
        }}>
          <Grid item minWidth='100%'>
            <Card />
          </Grid>
          <Grid item minWidth='100%'>
            <Card />
          </Grid>
          <Grid item minWidth='100%'>
            <Card />
          </Grid>
        </Grid>
      </StyledConatiner>
    </>
  )
}


export default PageInitial