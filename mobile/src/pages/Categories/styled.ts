import styled from 'styled-components'

export const Container = styled.View`
  background-color: #ffffffc0;

  flex: 1;
`

export const Content = styled.View`
  flex: 1;
`

export const Category = styled.TouchableOpacity`
  height: 50px;

  margin: 10px;
  padding-left: 10px;

  border-radius: 10px;
  border-width: 0.3px;
  border-color: #525252;

  justify-content: center;
`

export const Title = styled.Text`
  color: #333333;
  font-size: 24px;
  font-weight: bold;
`