import {
    Card,
    CardMedia
} from "@mui/material"

import Carousel from "react-material-ui-carousel"
import styled from "styled-components"

const StyledCarousel = styled(Carousel)`
   && {
    width: auto;
    height: auto;
}
`

const StyledCard = styled(Card)`
   && {
 height: 100%
}
`


const Product = () => {
    return (
        <>

            <StyledCarousel
                autoPlay={false}
                animation='slide'
                
            >
                <StyledCard
                    sx={{
                        height: '100%'
                    }}
                >
                    <CardMedia
                        sx={{
                            paddingTop: '56%'
                        }}
                        image='https://lh3.googleusercontent.com/p/AF1QipNxmy2-oBAl3gljo-cVPZSyfZ3_A50XpYySwkcp=s680-w680-h510'
                        title='Titulo da imagem'
                    />
                </StyledCard>
                <Card
                    sx={{
                        height: '100%'
                    }}
                >
                    <CardMedia
                        sx={{
                            paddingTop: '56%'
                        }}
                        image='https://lh3.googleusercontent.com/p/AF1QipPCAVNB_0sE_ZnhKDCv9r009fHR6MQ9FD7ZOOSW=s680-w680-h510'
                        title='Titulo da imagem'
                    />
                </Card>
                <Card
                    sx={{
                        height: '100%'
                    }}
                >
                    <CardMedia
                        sx={{
                            paddingTop: '56%'
                        }}
                        image='https://lh3.googleusercontent.com/p/AF1QipPuB1WIef4y0_wrrWIPZeTOM8wuEqh8lPtrD5WX=s680-w680-h510'
                        title='Titulo da imagem'
                    />
                </Card>
            </StyledCarousel>

        </ >
    )
}

export default Product