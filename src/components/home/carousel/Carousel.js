import { Card, CardMedia } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
    Navigation,
    Pagination,
    A11y,
    Autoplay
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

import styled from 'styled-components'

const StyledCardMedia = styled(CardMedia)`
&& {
    padding-top: 56%;
    width: auto;
    height: 230px;
}
  `
  
export default () => {
    return (
        <Swiper style={{ margin: '16px 3px 0px 3px' }}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
                280: {
                    slidesPerView: 1,
                    spaceBetween: 1
                },

                320: {
                    slidesPerView: 2,
                    spaceBetween: 1
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 3,
                    spaceBetween: 1
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 4,
                    spaceBetween: 1
                },

                768: {
                    slidesPerView: 4,
                    spaceBetween: 1
                }
            }
            }
        >
            <SwiperSlide
                data-swiper-autoplay="2000"
            >
                <Card
                    sx={{

                        borderRadius: '20px'
                    }}
                >
                    <StyledCardMedia
                     
                        image="https://source.unsplash.com/random?w=500&a=1"
                        title="titulo da imagem"
                        alt='image'
                    />
                </Card>
            </SwiperSlide>
            <SwiperSlide
                data-swiper-autoplay="2000"
            >
                <Card
                    sx={{
                        borderRadius: '20px'
                    }}
                >
                    <StyledCardMedia
                        image="https://source.unsplash.com/random?w=500&a=2"
                        title="titulo da imagem"
                        alt='image'
                    />
                </Card>
            </SwiperSlide>
            <SwiperSlide
                data-swiper-autoplay="2000"
            >
                <Card
                    sx={{
                        borderRadius: '20px'
                    }}
                >
                    <StyledCardMedia
                        image="https://source.unsplash.com/random?w=500&a=3"
                        title="titulo da imagem"
                        alt='image'
                    />
                </Card>
            </SwiperSlide >
            <SwiperSlide
                data-swiper-autoplay="2000"
            >
                <Card
                    sx={{
                        borderRadius: '20px'
                    }}>
                    <StyledCardMedia
                        image="https://source.unsplash.com/random?w=500&a=4"
                        title="titulo da imagem"
                        alt='image'
                    />
                </Card>
            </SwiperSlide>
            <SwiperSlide
                data-swiper-autoplay="2000"
            >
                <Card
                    sx={{
                        borderRadius: '20px'
                    }}>
                    <StyledCardMedia
                        image="https://source.unsplash.com/random?w=500&a=5"
                        title="titulo da imagem"
                        alt='image'
                    />
                </Card>
            </SwiperSlide>
            <br />
        </Swiper>
    )
}