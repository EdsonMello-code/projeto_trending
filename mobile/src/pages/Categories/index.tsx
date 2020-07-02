import React from 'react'

import Head from '../../components/Head'

import {
  Container,
  Content,
  Category,
  Title
} from './styled'

const Categories = () => {
  return (
    <Container>
      <Head />

      <Content>
        <Category>
          <Title>Terror</Title>
        </Category>

        <Category>
          <Title>Comédia</Title>
        </Category>

        <Category>
          <Title>Ação</Title>
        </Category>

        <Category>
          <Title>Aventura</Title>
        </Category>
      </Content>
    </Container>
  )
}

export default Categories
