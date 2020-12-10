import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.header`
  display: flex;
  margin: 30px auto 0;
  max-width: 1500px;
  position: absolute;
  z-index: 4;
  left: 0;
  right: 0;
  justify-content: space-between;
  padding: 0 30px;
  align-items: flex-end;
`

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin: 0 25px;
  color: #fff;
  font-size: 21px;

  &.active {
    color: #e05b17;
  }

  &:hover {
    text-decoration: underline;
  }
`

export const Image = styled.img`
  display: block;
`
