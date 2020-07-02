import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

import Head from '../../components/Head'

import {
  Container,
  Content,
  ContainerScroll,
  BookTitleIndicator,
  BooksIndicator,
  BookImage,
  LibraryScroll,
  LibraryContainer,
  LibraryImage,
  LibraryTitle,
  LibraryDescription,
  LibraryCategories,
  Categories,
  ButtonFavorite,
  Column
} from './styled.ts'
import book from '../../assets/shirley_jackson.png'

const Home = () => {
  return (
    <Container>
      <Head />

      <Content>
        <ContainerScroll>
          <BookTitleIndicator>
            Livros parecidos com Sthepen King
          </BookTitleIndicator>

          <BooksIndicator
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <BookImage source={book} />
            <BookImage source={book} />
            <BookImage source={book} />
            <BookImage source={book} />
            <BookImage source={book} />
          </BooksIndicator>
        </ContainerScroll>

        <LibraryScroll
          showsVerticalScrollIndicator={false}
        >
          <LibraryContainer>
            <LibraryImage source={book} />
            <Column>
              <LibraryTitle>Shirley Jackson</LibraryTitle>
              <LibraryDescription
                numberOfLines={2}
              >
                Alguma coisa aí saklfosaijoisajfsadosandosafsoaifisadosandsoandsndsa
                saoifosijfiosadjsoiafosajfojsd
              </LibraryDescription>

              <LibraryCategories>
                <Categories>
                  Terror
                </Categories>

                <Categories>
                  Psicologico
                </Categories>
              </LibraryCategories>
            </Column>
            <ButtonFavorite>
              <FontAwesome
                name="heart"
                size={32}
                color="#17e5cc"
              />
            </ButtonFavorite>
          </LibraryContainer>

          <LibraryContainer>
            <LibraryImage source={book} />
            <Column>
              <LibraryTitle>Shirley Jackson</LibraryTitle>
              <LibraryDescription
                numberOfLines={2}
              >
                Alguma coisa aí saklfosaijoisajfsadosandosafsoaifisadosandsoandsndsa
                saoifosijfiosadjsoiafosajfojsd
              </LibraryDescription>

              <LibraryCategories>
                <Categories>
                  Terror
                </Categories>

                <Categories>
                  Psicologico
                </Categories>
              </LibraryCategories>
            </Column>
            <ButtonFavorite>
              <FontAwesome
                name="heart"
                size={32}
                color="#525252"
              />
            </ButtonFavorite>
          </LibraryContainer>

          <LibraryContainer>
            <LibraryImage source={book} />
            <Column>
              <LibraryTitle>Shirley Jackson</LibraryTitle>
              <LibraryDescription
                numberOfLines={2}
              >
                Alguma coisa aí saklfosaijoisajfsadosandosafsoaifisadosandsoandsndsa
                saoifosijfiosadjsoiafosajfojsd
              </LibraryDescription>

              <LibraryCategories>
                <Categories>
                  Terror
                </Categories>

                <Categories>
                  Psicologico
                </Categories>
              </LibraryCategories>
            </Column>

            <ButtonFavorite>
              <FontAwesome
                name="heart"
                size={32}
                color="#525252"
              />
            </ButtonFavorite>
          </LibraryContainer>
        </LibraryScroll>
      </Content>
    </Container>
  )
}

export default Home
