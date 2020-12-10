import styled from 'styled-components'

export const Wrapper = styled.section`
  background-image: linear-gradient(-45deg, #063a7d 0%, #2a63ab 100%);
  color: #fff;
  text-align: center;
  min-height: 100vh;
  position: relative;
  padding-bottom: 60px;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height:300px;
    background: white;
    padding: 16.625rem 0;
    mask:
      radial-gradient(130% 71% at top, white 79.5%,transparent 80%) top left,
      radial-gradient(130% 72% at bottom, transparent 79.5%, white 80%) top right;
    mask-size:50% 140%;
    mask-repeat:no-repeat;
    transform: rotateX(180deg);
    position: absolute;
    bottom: 0;
    z-index: 1;
  }
`

export const Front = styled.div`
  position: relative;
  z-index: 2;
`

export const Header1 = styled.h1`
  padding: 100px 0 0;
  margin: 0 0 15px;
  font-size: 42px;
  font-weight: 600;
  
  @media screen and (min-height: 1200px) {
    padding: 160px 0 0;
  }
`

export const Header2 = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 23px;
  font-weight: 600;
`

export const Buttons = styled.div`
  margin-top: 50px;
  text-align: center;

  a {
    margin: 0 30px;
  }
`

export const ImageWrapper = styled.div`
  max-width: 1450px;
  margin: 100px auto 0;
  box-shadow: 20px 20px 20px rgb(2 2 2 / 0.25);
  
  @media screen and (min-height: 1200px) {
    margin-top: 120px;
  }
  
  img {
    display: block;
  }
`
