import React from 'react'
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
// import url from '../assets/sponsor.jpeg'

const All = styled.div`
  width: 100vw;
  background-color: white;
`
const url =
  'http://2017.barcampbangkhen.org/static/media/platinum-2.5e7a55c7.svg?fbclid=IwAR2UgEdsDE7BnmFDt51eiayieUkmfRkkn_hMZhFdOkQHj9YvoyCtIyJTH9Q'

const sponsors = {
  platinum: [url, url, url, url],
  gold: [url, url],
  silver: [url, url],
}

const Sponsor = styled.div`
  flex: 1;
  text-align: center;
  > img {
    border-radius: 12px;
  }
`

const PairContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  padding: 0 ${props => props.size};
  > :first-child {
    text-align: right;
  }
  > :last-child {
    text-align: left;
  }
  ${Sponsor} + ${Sponsor} {
    margin-left: 1em;
  };
`

const Container = styled.div`
  max-width: 800px;
  margin: auto;
`

const SizeList = {
  gold: '0px',
  silver: '50px',
  platinum: '100px',
}

export default () => (
  <All>
    <Container>
      {sponsors.gold.map((sponsor, i) => (
        <PairContainer key={i + '1'} size={SizeList.gold}>
          <Sponsor>
            <Fade>
              <Zoom>
                <img src={sponsor} />
              </Zoom>
            </Fade>
          </Sponsor>
          <Sponsor>
            <Zoom>
              <Fade>
                <img src={sponsor} />
              </Fade>
            </Zoom>
          </Sponsor>
        </PairContainer>
      ))}
      {sponsors.silver.map((sponsor, i) => (
        <PairContainer key={i + '2'} size={SizeList.silver}>
          <Sponsor>
            <Zoom>
              <Fade>
                <img src={sponsor} />
              </Fade>
            </Zoom>
          </Sponsor>
          <Sponsor>
            <Zoom>
              <Fade>
                <img src={sponsor} />
              </Fade>
            </Zoom>
          </Sponsor>
        </PairContainer>
      ))}
      {sponsors.platinum.map((sponsor, i) => (
        <PairContainer key={i + '3'} size={SizeList.platinum}>
          <Sponsor>
            <Zoom>
              <Fade>
                <img src={sponsor} />
              </Fade>
            </Zoom>
          </Sponsor>
          <Sponsor>
            <Zoom>
              <Fade>
                <img src={sponsor} />
              </Fade>
            </Zoom>
          </Sponsor>
        </PairContainer>
      ))}
    </Container>
  </All>
)
