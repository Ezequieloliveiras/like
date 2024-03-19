import { Box, IconButton } from "@mui/material";
import styled from "styled-components";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

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

const ScrollButton = styled(IconButton)`
  && {position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
  background-color: aliceblue;
  }
`;

const Storys = () => {
  return (
    <>
      <div style={{ height: '100px', position: 'relative' }}>
        <ScrollButton
          onClick={() => {
            const container = document.getElementById("scroll-container");
            if (container) container.scrollLeft -= 100;
          }}
          style={{ left: 0 }}
        >
          <KeyboardArrowLeft />
        </ScrollButton>
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
              <Img src="https://source.unsplash.com/random?=1" />
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=1" />
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=1" />
            </HistoryEvents>
          </div>       <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=1" />
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=1" />
            </HistoryEvents>
          </div>
          <div>
            <HistoryEvents>
              <Img src="https://source.unsplash.com/random?=1" />
            </HistoryEvents>
          </div>
        </StyledBox>
        <ScrollButton
          aria-label="scroll right"
          onClick={() => {
            const container = document.getElementById("scroll-container");
            if (container) container.scrollLeft += 100;
          }}
          style={{ right: 0 }}
        >
          <KeyboardArrowRight />
        </ScrollButton>
      </div>
    </>
  );
};

export default Storys;
