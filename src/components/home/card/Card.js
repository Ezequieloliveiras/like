import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { red } from '@mui/material/colors'
import styled from 'styled-components'
import CommentField from '../pushComment/Coment'
import ListComments from '../comments/ListComment'

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


const StyledCardMedia = styled(CardMedia) `
  height: 800;

  @media (max-width: 767px) {
    height: 500px;
  }
`

function RecipeReviewCard() {

  return (
    <Card sx={{ width: '100%'}}>
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
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
     
      <StyledCardMedia
        component="img"
        alt="Paella dish"
        image={'https://source.unsplash.com/random'}
        sx={{objectFit:'div', height:'600px'}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
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