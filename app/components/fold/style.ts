import styled from 'styled-components'
import { Props } from '.'

export const Wrapper = styled.div<Props>`
  background: ${p => p.number % 2 === 0 ? 'linear-gradient(-45deg, #063a7d 0%, #2a63ab 100%);' : '#003173'};
  padding: 70px 0;
`

export const Center = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1500px;
  padding: 0 15px;
`

export const Text = styled.div`
  color: #fff;
  width: 400px;
  margin-right: 130px;

  h4 {
    font-size: 38px;
    padding: 0;
    margin: 0;
  }

  p {
    font-size: 28px;
    padding: 0;
    margin: 20px 0 0;
  }
`

export const Image = styled.div`
  flex: 1;
  border-radius: 5px;
  overflow: hidden;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 28px;
`

export const Title = styled.h3`
  font-size: 25px;
  font-weight: normal;
  padding: 0;
  margin: 0 0 0 27px;
  text-transform: uppercase;
  letter-spacing: 1.25px;
`
