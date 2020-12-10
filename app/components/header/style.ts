import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.header`
  display: flex;
  margin: 65px auto 0;
  max-width: 1500px;
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;
`

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin: 0 25px;
  color: #69c7ef;
  font-size: 26px;
  
  &.active {
    color: #e05b17;
  }
  
  &:hover {
    text-decoration: underline;
  }
`
