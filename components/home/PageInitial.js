import Card from '../Card'

import {
  CardMedia,
  Container,
  Grid,

} from '@mui/material'

const PageInitial = () => {
  return (
    <>
      <Container maxWidth='md' sx={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
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
      </Container>
    </>
  )
}


export default PageInitial