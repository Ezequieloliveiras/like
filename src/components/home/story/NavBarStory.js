import {
  KeyboardArrowLeft,
  KeyboardArrowRight
} from "@mui/icons-material"

import {
  StyledBox,
  Container,
  Img,
  HistoryEvents
} from "./Styles"

import './styles.css'

const Storys = () => {

  return (
    <>
      <Container>
        <button
          className="buttonLeft"
          onClick={() => {
            const container = document.getElementById("scroll-container");
            if (container) container.scrollLeft -= 100;
          }}
        >
          <KeyboardArrowLeft sx={{ color: 'grey' }} />
        </button>
        <StyledBox id="scroll-container">
          <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=1" />
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=2" />
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=3" />
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=4" />
            </HistoryEvents>
          </div>       <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=5" />
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=6" />
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=7" />
            </HistoryEvents>
          </div>       <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=8" />
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=9" />
            </HistoryEvents>
          </div>       <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=10" />
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=11" />
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=12" />
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents className="historyEvents">
              <Img src="https://source.unsplash.com/random?=13" />
            </HistoryEvents>
          </div>       <div>
            <HistoryEvents className="historyEvents">
              <Img src="https://source.unsplash.com/random?=14" />
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents className="historyEvents">
              <Img src="https://source.unsplash.com/random?=15" />
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents className="historyEvents">
              <Img src="https://source.unsplash.com/random?=16" />
            </HistoryEvents>
          </div>
        </StyledBox>
        <button className="buttonRight"
          onClick={() => {
            const container = document.getElementById("scroll-container");
            if (container) container.scrollLeft += 100;
          }}
        >
          <KeyboardArrowRight sx={{ color: 'grey' }} />
        </button>
      </Container>
    </>
  );
};

export default Storys;
