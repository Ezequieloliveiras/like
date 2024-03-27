import {
  KeyboardArrowLeft,
  KeyboardArrowRight
} from "@mui/icons-material"

import {
  StyledBox,
  Container,
  HistoryEvents,
  ButtonNext,
} from "./Styles"

import Bar from './point_bar.jpg'
import Image from "next/image"
const Storys = () => {

  return (
    <>
      <Container>
        <ButtonNext
          className="buttonLeft"
          onClick={() => {
            const container = document.getElementById("scroll-container")
            if (container) container.scrollLeft -= 100
          }}
        >
          <KeyboardArrowLeft sx={{ color: 'grey' }} />
        </ButtonNext>
        <StyledBox id="scroll-container">
          <div>
            <HistoryEvents>
              <Image src={Bar} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="beer"/>
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Image src={Bar} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="beer"/>
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Image src={Bar} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="beer"/>
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Image src={Bar} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="beer"/>
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Image src={Bar} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="beer"/>
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Image src={Bar} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="beer"/>
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Image src={Bar} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="beer"/>
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Image src={Bar} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="beer"/>
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Image src={Bar} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="beer"/>
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Image src={Bar} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="beer"/>
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Image src={Bar} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="beer"/>
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Image src={Bar} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="beer"/>
            </HistoryEvents>
          </div>
        </StyledBox>
        <ButtonNext
          onClick={() => {
            const container = document.getElementById("scroll-container")
            if (container) container.scrollLeft += 100
          }}
        >
          <KeyboardArrowRight sx={{ color: 'grey' }} />
        </ButtonNext>
      </Container>
    </>
  )
}

export default Storys
