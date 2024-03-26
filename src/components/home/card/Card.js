import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { red } from '@mui/material/colors'
import CommentField from '../pushComment/Coment'
import ListComments from '../comments/FieldComment'

import CarouselImage from './CarouselImage'

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material'


function RecipeReviewCard() {

  return (
    <Card
      sx={{
        width: '100%',
        backgroundColor: '#212121',
        color: 'white'
      }}>
      <CardHeader
        
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon sx={{color:'#F5F5F5'}}/>
          </IconButton>
        }
        color='secondary'
        title="BarlaventoVix"
        subheader={<span style={{ color: '#F5F5F5' }}>Março de 2024</span>} 
      />


      <CarouselImage sx={{ position: 'absolute' }} />

      <CardContent>
        <Typography variant="body2" sx={{ color: '#F5F5F5' }}>
          Está procurando um dos melhores "Barzinhos" para curtir no seu final de semana? Então o  Barlaventovix é umas das melhores opções de Vitória. Musica ao vivo, Dj's com musicas eletrônicas, pagode e muito mais! Confira agora na Aura onde fica esse Bar que vai te deixar em êxtase.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{color:'#F5F5F5'}}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon sx={{color:'#F5F5F5'}}/>
        </IconButton>
      </CardActions>
      <CommentField />
      <ListComments />
    </Card>
  )
}



export default RecipeReviewCard