
import { Box } from "@mui/material";
import styled from "styled-components";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import './styles.css'

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

const Storys = () => {
  const isMobile = window.innerWidth <= 768

  return (
    <>
      <div
        style={{
          height: '100px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}
        >
        <button
          className="buttonLeft"
          onClick={() => {
            const container = document.getElementById("scroll-container");
            if (container) container.scrollLeft -= 100;
          }}
          style={{ left: 0 }}
          hideOnMobile={isMobile}
        >
          <KeyboardArrowLeft />
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
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=13" />
            </HistoryEvents>
          </div>       <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=14" />
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=15" />
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=16" />
            </HistoryEvents>
          </div>
        </StyledBox>
        <button className="buttonRight"

          onClick={() => {
            const container = document.getElementById("scroll-container");
            if (container) container.scrollLeft += 100;
          }}
          style={{ right: 0 }}
          hideOnMobile={isMobile}
        >
          <KeyboardArrowRight />
        </button>
      </div>
    </>
  );
};

export default Storys;
