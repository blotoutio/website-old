import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Props } from '.'

const style = css<Props>`
  font-size: 25px;
  color: #fff;
  border-radius: 10px;
  background-color: ${p => p.type === 'primary' ? '#e15b17' : 'transparent'};
  padding: 10px 20px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  border: 1px solid ${p => p.type === 'primary' ? 'transparent' : '#fff'};
  min-width: 285px;

  &:hover {
    opacity: 0.8;
  }
`

export const StyledLink = styled(Link)<Props>`
  ${style}
`

export const StyledExternalLink = styled.a<Props>`
  ${style}
`
