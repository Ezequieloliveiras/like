import { Box } from "@mui/material"
import styled from "styled-components"

const Container = styled.div`
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
`;

const HistoryEvents = styled.div`
  height: 60px;
  width: 60px;
  border: 2px solid #90caf9;
  border-radius: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0 10px;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const StyledBox = styled(Box)`
  height: 100px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow: hidden;
  width: auto;
`;

export {
    Container,
    StyledBox,
    HistoryEvents,
    Img
}