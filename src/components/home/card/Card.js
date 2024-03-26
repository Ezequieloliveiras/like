import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { red } from '@mui/material/colors'
import styled from 'styled-components'
import CommentField from '../pushComment/Coment'
import ListComments from '../comments/FieldComment'

import CarouselImage from './CarouselImage'


import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material'

const StyledCardMedia = styled(CardMedia)`
  height: 800;

  @media (max-width: 767px) {
    height: 500px;
  }
`

function RecipeReviewCard() {

  return (
    <Card sx={{ width: '100%', textAlign: 'center' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="BarlaventoVix"
        subheader="Março de 2024"
      />


      <CarouselImage sx={{ position: 'absolute' }} />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Está procurando um dos melhores "Barzinhos" para curtir no seu final de semana? Então o  Barlaventovix é umas das melhores opções de Vitória. Musica ao vivo, Dj's com musicas eletrônicas, pagode e muito mais! Confira agora na Aura onde fica esse Bar que vai te deixar em êxtase.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <CommentField />
      <ListComments />
    </Card>
  )
}



export default RecipeReviewCard