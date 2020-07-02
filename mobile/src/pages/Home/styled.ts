import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  background-color: #ffffffc0;

  flex: 1;
`

export const ContainerScroll = styled.View`
  height: 300px;

  margin-top: 8px;
  margin-left: 10px;
  margin-right: 10px;
`

export const BookTitleIndicator = styled.Text`
  color: #333333;

  font-size: 20px;
  font-weight: bold;
`

export const BooksIndicator = styled.ScrollView``

export const BookImage = styled.Image`
  margin: 5px;

  width: 160px;
  height: 250px;

  border-radius: 5px;
`

export const LibraryScroll = styled.ScrollView`
  margin: 10px;
  margin-top: 15px;
`

export const LibraryContainer = styled.View`
  height: 140px;

  margin-bottom: 12px;
  padding: 10px;

  border-radius: 5px;
  border-width: 0.3px;
  border-color: #525252;

  flex-direction: row;
`

export const LibraryImage = styled.Image`
  width: 80px;
  height: 120px;

  border-radius: 5px;
`

export const LibraryTitle = styled.Text`
  color: #333333;

  margin-bottom: 3px;

  font-size: 18px;
  font-weight: bold;
`

export const LibraryDescription = styled.Text`
  color: #333333;

  font-size: 15px;
`

export const LibraryCategories = styled.View`
  flex: 1;
  flex-direction: row;

  align-items: flex-end;
`

export const Categories = styled.Text`
  background-color: #525252;

  margin-right: 8px;
  padding: 8px;

  border-radius: 10px;

  color: #ffffff;
`

export const ButtonFavorite = styled.TouchableOpacity`
  position: absolute;

  top: 95px;
  left: 92%;
`

export const Column = styled.View`
  margin-left: 10px;

  flex: 1;
  flex-direction: column;
`
