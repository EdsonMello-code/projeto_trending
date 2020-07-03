import styled from 'styled-components'

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  background-color: #ffffffc0;

  margin: 10px;

  flex: 1;
`

export const Scroll = styled.ScrollView``

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
