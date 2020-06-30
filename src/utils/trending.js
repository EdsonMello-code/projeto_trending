module.exports = (data) => {
  let wordsReply = []
  let trendings = []
  let topTrendings = []
  let cont = 1

  const newArray = data.map(tweets => {
    return tweets.text
  })

  const joinArray = newArray.join(' ')

  const splitTweet = joinArray.split(' ')

  for (let i = 0; i < splitTweet.length; i++) {
    for (let j = i + 1; j < splitTweet.length; j++) {
      if (splitTweet[j] === splitTweet[i]) {
        if (splitTweet[i].length > 1) {
          wordsReply.push(splitTweet[j])
        }
      }
    }
  }

  wordsReply = wordsReply.sort()

  for (let i = 1; i < wordsReply.length + 1; i++) {
    if (wordsReply[i] === wordsReply[i - 1]) {
      cont++
    } else {
      trendings.push({
        count: cont,
        text: wordsReply[i - 1]
      })

      cont = 1
    }
  }

  const orderTrending = trendings.sort((element1, element2) => {
    if (element1.count > element2.count) {
      return -1
    }

    if (element1.count < element2.count) {
      return 1
    }

    return 0
  })

  for (let i = 0; i < 10; i++) {
    if (!orderTrending[i]) {
      break
    }

    topTrendings.push(orderTrending[i])
  }

  return topTrendings
}
