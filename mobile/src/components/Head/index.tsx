import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Row,
  Logo,
  Input,
  Button,
  ContainerNavigation,
  ListNavigation,
  Title
} from './styled'
import logo from '../../assets/logo.png'

const Head = () => {
  const navigation = useNavigation()

  return (
    <>
    <Container>
      <Row>
        <Logo source={logo} />
        <Input placeholder="Pesquise aqui..."/>
        <Button
          onPress={() => {}}
        >
          <FontAwesome 
            name="search" 
            size={32} 
            color="#ffffff"
          />
        </Button>
      </Row>
    </Container>

    <ContainerNavigation>
      <ListNavigation
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Button onPress={() => navigation.navigate('Home')}>
          <Title>Home</Title>
        </Button>

        <Button onPress={() => navigation.navigate('Categories')}>
          <Title>Categorias</Title>
        </Button>

        <Button onPress={() => navigation.navigate('Trending')}>
          <Title>Trending</Title>
        </Button>

        <Button onPress={() => navigation.navigate('Favorites')}>
          <Title>Favoritos</Title>
        </Button>

        <Button onPress={() => navigation.navigate('Offline')}>
          <Title>Offline</Title>
        </Button>
      </ListNavigation>
    </ContainerNavigation>
    </>
  )
}

export default Head
