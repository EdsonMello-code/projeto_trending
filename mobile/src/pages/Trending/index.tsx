import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'

import Head from '../../components/Head'

import {
  Container,
  Content,
  BoxComment,
  InputComment,
  ButtonUpload,
  ButtonSend,
  BoxTrending,
  TitleTrending,
  Row,
  ButtonTrending,
  TextTrending,
  BoxComments,
  TitleComments,
  Comment,
  CommentText,
  CommentHeart,
  UserProfile,
  UserName,
  Column,
  Scroll,
  ContainerAny
} from './styled'

import api from '../../service/api'

const Trending = () => {
  const [tweets, setTweets]: any = useState([])
  const [trends, setTrends]: any = useState([])
  const [heartColor, setHeartColor] = useState('#525252')
  const [comment, setComment] = useState('')
  const [image, setImage] = useState<File>()
  const [topic, setTopic]: any = useState({
    id: 1,
    text: 'undefined'
  })

  useEffect(() => {
    async function loadTweets() {
      const response = await api.get('/tweets')
    
      setTweets(response.data.reverse())
    }

    if(topic.id) {
      loadTweets()   
    }
  }, [topic])

  useEffect(() => {
    async function loadTrending() {
      const response = await api.get('/trending')

      setTrends(response.data)
    }

    loadTrending()
  }, [])

  function switchHeartColor() {
    // =======================
    // Colocar uma propriedade para se alterar o valor da cor
    // do heart de curtir, isso tem que ser modificado no backend
    // =======================

    if (heartColor === '#525252') {
      return setHeartColor('#17e5cc')
    }

    setHeartColor('#525252')
  }

  async function tweetsByTopic(trendTopic: string) {
    if (topic.text === trendTopic) {
      setTopic({
        id: 1,
        text: 'undefined'
      })
      return
    }

    const response = await api.get(`/trending/${trendTopic}`)

    setTweets(response.data)
    if(topic.id) {
      setTopic({
        id: 0,
        text: trendTopic
      })
    }
  }

  async function addComment() {
    const data = new FormData()

    data.append('text', comment)

    if(image) {
      data.append('image', image)
    }

    const response = await api.post('/tweet/1', data)
    setTweets([
      response.data,
      ...tweets
    ])
    setComment('')
    tweetsByTopic('undefined')
  }

  return (
    <Container>
      <Head />

      <Content>
        <BoxComment>
          <InputComment
            numberOfLines={4}
            placeholder="Digite seu comentário..."
            value={comment}
            onChangeText={setComment}
          />

          <ButtonUpload>
            <FontAwesome name="image" size={28} color="#525252" />
          </ButtonUpload>

          <ButtonSend onPress={() => addComment()}>
            <FontAwesome name="paper-plane" size={20} color="#ffffff" />
          </ButtonSend>
        </BoxComment>
        <Scroll
          showsVerticalScrollIndicator={false}
        >
          <BoxTrending>
            <TitleTrending># Trends</TitleTrending>
            <Row>
              {trends.map((trend: any, index: number) => (
                <ButtonTrending
                  key={index}
                  onPress={() => tweetsByTopic(trend.text)}
                >
                  <TextTrending>{trend.text}</TextTrending>
                </ButtonTrending>
              ))}
            </Row>
          </BoxTrending>

          <BoxComments>
            <TitleComments>Comentários</TitleComments>
            {tweets.map((tweet:any) => (
              <ContainerAny key={tweet.id}>
                <Comment>
                  <UserProfile />
                  <Column>
                    <UserName>@leandro-wrf</UserName>
                    <CommentText>
                      {tweet.text}
                    </CommentText>
                  </Column>
                </Comment>

                <CommentHeart
                  onPress={() => switchHeartColor()}
                >
                  <FontAwesome
                    name="heart"
                    size={36}
                    color={heartColor}
                  />
                </CommentHeart>
              </ContainerAny>
            ))}
          </BoxComments>
        </Scroll>
      </Content>
    </Container>
  )
}

export default Trending
