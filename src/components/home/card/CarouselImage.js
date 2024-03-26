
import {
    Box,
    Card,
    CardMedia
} from "@mui/material"

import Carousel from "react-material-ui-carousel"

const Product = () => {
    return (
        <>
            <Box sx={{
                backgroundColor: '#212121',
                marginBottom: '30px',
                textAlign: 'left',
                padding: '10px',
            }}>
                <Carousel
                    autoPlay={false}
                    animation='slide'

                >
                    <Card
                        sx={{
                            height: '100%',
                        }}
                    >

                        <CardMedia
                            sx={{ paddingTop: '56%' }}
                            image='https://lh3.googleusercontent.com/p/AF1QipNxmy2-oBAl3gljo-cVPZSyfZ3_A50XpYySwkcp=s680-w680-h510'
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
                </Carousel>
            </Box>
        </ >
    )
}

export default Product