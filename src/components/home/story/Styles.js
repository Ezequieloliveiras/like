import { Box } from "@mui/material"
import styled from "styled-components"

const Container = styled.div`
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {

  #scroll-container {
    overflow-x: auto;
    /* Habilita a barra de rolagem horizontal */
    overflow-y: hidden;
    /* Esconde a barra de rolagem vertical */
    scrollbar-width: thin;
    /* Largura fina da barra de rolagem */
    scrollbar-color: #90caf9 transparent;
    /* Cor da barra de rolagem e cor do fundo do track */
    padding: 15px 0px;
  }

  /* Este seletor estiliza a barra de rolagem no Chrome, Safari e Edge */
  #scroll-container::-webkit-scrollbar {
    width: 6px;
    /* Largura da barra de rolagem */
    height: 6px;
    /* Altura da barra de rolagem */
  }

  /* Este seletor estiliza o track da barra de rolagem no Chrome, Safari e Edge */
  #scroll-container::-webkit-scrollbar-track {
    background: transparent;
    /* Cor do fundo do track */
  }

  /* Este seletor estiliza o thumb (alça) da barra de rolagem no Chrome, Safari e Edge */
  #scroll-container::-webkit-scrollbar-thumb {
    background-color: #90caf9;
    /* Cor do thumb (alça) */
    border-radius: 3px;
    /* Arredonda os cantos do thumb (alça) */
  }

  /* Este seletor estiliza a barra de rolagem no Firefox */
  #scroll-container::-moz-scrollbar {
    width: 6px;
    /* Largura da barra de rolagem */
    height: 6px;
    /* Altura da barra de rolagem */
  }

  /* Este seletor estiliza o thumb (alça) da barra de rolagem no Firefox */
  #scroll-container::-moz-scrollbar-thumb {
    background-color: #90caf9;
    /* Cor do thumb (alça) */
    border-radius: 3px;
    /* Arredonda os cantos do thumb (alça) */
  }
}
`

const StyledBox = styled(Box)`
  height: auto;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow: hidden;
  width: auto;
`

const HistoryEvents = styled.div`
  height: 80px;
  width: 80px;
  margin: 0 6px;
  border: 2px solid #fafafa;
  border-radius: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: flex;

  @media (min-width: 769px) {
    height: 60px !important;
    width: 60px !important;
  }
`

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`


const ButtonNext = styled.button`
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #90caf9;
  }

  @media (max-width: 768px) {
    display: none;
    /* Oculta os botões de rolagem */
    
    .buttonRight {
      display: none;
      /* Oculta os botões de rolagem */
    }
    overflow-x: auto;
    /* Habilita a barra de rolagem horizontal */
    overflow-y: hidden;
    /* Esconde a barra de rolagem vertical */
    scrollbar-width: thin;
    /* Largura fina da barra de rolagem */
    scrollbar-color: #90caf9 transparent;
    /* Cor da barra de rolagem e cor do fundo do track */
    padding: 15px 0px;

    /* Este seletor estiliza a barra de rolagem no Chrome, Safari e Edge */
    &::-webkit-scrollbar {
        width: 6px;
        /* Largura da barra de rolagem */
        height: 6px;
        /* Altura da barra de rolagem */
    }

    /* Este seletor estiliza o track da barra de rolagem no Chrome, Safari e Edge */
    &::-webkit-scrollbar-track {
        background: transparent;
        /* Cor do fundo do track */
    }

    /* Este seletor estiliza o thumb (alça) da barra de rolagem no Chrome, Safari e Edge */
    &::-webkit-scrollbar-thumb {
        background-color: #90caf9;
        /* Cor do thumb (alça) */
        border-radius: 3px;
        /* Arredonda os cantos do thumb (alça) */
    }

    /* Este seletor estiliza a barra de rolagem no Firefox */
    &::-moz-scrollbar {
        width: 6px;
        /* Largura da barra de rolagem */
        height: 6px;
        /* Altura da barra de rolagem */
    }

    /* Este seletor estiliza o thumb (alça) da barra de rolagem no Firefox */
    &::-moz-scrollbar-thumb {
        background-color: #90caf9;
        /* Cor do thumb (alça) */
        border-radius: 3px;
        /* Arredonda os cantos do thumb (alça) */
    }
  }
`

export {
  Container,
  StyledBox,
  HistoryEvents,
  Img,
  ButtonNext,

}