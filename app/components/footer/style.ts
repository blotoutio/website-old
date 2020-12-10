import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.footer`
  background: #E6E9EE;
  padding: 50px 0 70px;
  text-align: center;
`

export const Social = styled.div`
  color: #737478;
  
  a {
    text-decoration: none;
    display: inline-block;
    margin: 0 20px;
  }
`

export const SiteMap = styled.div`
  margin-top: 20px;
`

export const StyledLink = styled(Link)`
  display: inline-block;
  margin: 0 18px;
  color: #012F76;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: #e05b17;
  }
`

export const Copy = styled.div`
  margin-top: 20px;
`
