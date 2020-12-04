import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export const Wrapper = styled.header`
  display: flex;
  align-items: baseline;
  margin-top: 20px;
`

export const Links = styled.div`
`

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin: 0 20px;
  color: #555;
  
  &.active {
    color: #e05b17;
  }
`

export const Logo = styled(Link)`

`
