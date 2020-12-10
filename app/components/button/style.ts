import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Props } from '.'

const style = css<Props>`
  font-size: 29px;
  color: ${p => p.type === 'primary' ? '#fff' : '#003173'};
  border-radius: 10px;
  background-color: ${p => p.type === 'primary' ? '#e15b17' : '#69c7ef'};
  padding: 17px 20px;
  text-decoration: none;
  display: inline-block;
`

export const StyledLink = styled(Link)<Props>`
  ${style}
`

export const StyledExternalLink = styled.a<Props>`
  ${style}
`
