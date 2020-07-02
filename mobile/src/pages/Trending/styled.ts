import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  background-color: #ffffffc0;

  flex: 1;
`

export const BoxComment = styled.View`
  margin: 8px;

  height: 150px;
`

export const InputComment = styled.TextInput`
  background-color: #ffffff;

  margin: 8px;
  padding-left: 8px;

  border-radius: 24px;
  border-width: 0.3px;
  border-color: #525252;

  flex: 1;
`

export const ButtonUpload = styled.TouchableOpacity`
  position: absolute;

  top: 105px;
  left: 20px;
`

export const ButtonSend = styled.TouchableOpacity`
  background-color: #17e5cc;

  height: 60px;
  width: 60px;

  padding-right: 5px;

  border-radius: 30px;

  position: absolute;

  top: 100px;
  left: 80%;

  align-items: center;
  justify-content: center;
`

export const BoxTrending = styled.View`
  margin: 8px;

  height: 140px;

  border-top-width: 0.3px;
  border-bottom-width: 0.3px;
  border-color: #525252;
`

export const TitleTrending = styled.Text`
  margin-top: 2px;

  color: #2d2d2d;
  font-size: 18px;
  font-weight: bold;
`

export const Row = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ButtonTrending = styled.TouchableOpacity`
  margin: 4px;
  margin-left: 8px;
  margin-right: 8px;

  padding: 2px;
  padding-left: 4px;
  padding-right: 4px;

  border-radius: 10px;
  border-width: 0.5px;
  border-color: #525252;
`

export const TextTrending = styled.Text`
  color: #525252;
  font-size: 15px;
  font-weight: bold;
`

export const BoxComments = styled.View`
  background-color: #ffffff;

  flex: 1;
  flex-direction: column;
`

export const TitleComments = styled.Text`
  margin-top: 2px;
  margin-left: 4px;

  color: #2d2d2d;
  font-size: 18px;
  font-weight: bold;
`

export const Comment = styled.View`
  margin: 10px;

  border-radius: 4px;
  border-width: 0.3px;
  border-color: #525252;

  flex-direction: row;
`

export const CommentText = styled.Text`
  margin: 10px;
  margin-top: 2px;

  font-size: 14px;
`

export const CommentHeart = styled.TouchableOpacity`
  margin-top: -25px;
  margin-right: 30px;

  align-items: flex-end;
  justify-content: flex-end;
`

export const UserProfile = styled.View`
  background-color: #17e5cc;

  width: 60px;
  height: 60px;

  margin-left: 10px;
  margin-top: 15px;
  margin-right: 8px;
  margin-bottom: 15px;

  border-radius: 60px;
`

export const UserName = styled.Text`
  margin-top: 8px;

  color: #333333;
  font-size: 14px;
  font-weight: bold;
`

export const Column = styled.View`
  flex-direction: column
`

export const Scroll = styled.ScrollView``

export const ContainerAny = styled.View``