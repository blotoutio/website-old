import styled from 'styled-components'

export const Content = styled.section`
  margin: 0 auto;
  max-width: 1200px;
  padding: 30px 15px;
`

export const Article = styled.article`
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 40px;
  
  &:last-of-type {
    border: none;
  }
`

export const ReadMore = styled.a`
  border: 1px solid #ddd;
  color: #333;
  padding: 5px 10px 6px;
  text-decoration: none;
  font-size: 12px;
  transition: all 0.3s ease;
  display: inline-block;
  margin-top: 10px;
  border-radius: 5px;
  
  &:hover {
    border-color: #e05b17;
    color: #e05b17;
  }
`

export const Title = styled.h3`
  margin: 30px 0 5px;
`
