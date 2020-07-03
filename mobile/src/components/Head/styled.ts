import styled from 'styled-components/native'
import Constants from 'expo-constants'

export const Container = styled.View`
  background-color: #17e5cc;

  height: 85px;
`

export const Row = styled.View`
  margin-top: ${Constants.statusBarHeight}px;
  margin-right: 8px;
  margin-left: 5px;

  flex: 1;
  flex-direction: row;
  align-items: center;
`

export const Logo = styled.Image`
  width: 51px;
  height: 51px;  
`

export const Input = styled.TextInput`
  background-color: #ffffff;

  margin: 10px;

  padding: 10px;

  height: 40px;

  border-radius: 5px;

  flex: 1;
`

export const Button = styled.TouchableOpacity``

export const ContainerNavigation = styled.View`
  height: 53px;
`

export const ListNavigation = styled.ScrollView`
  background-color: #17e5cc;

  height: 40px;
`

export const Title = styled.Text`
  margin: 8px;

  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`