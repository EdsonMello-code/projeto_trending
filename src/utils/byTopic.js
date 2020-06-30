module.exports = (data, search) => {
  let tweetsByTopic = []

  for (let i = 0; i < data.length; i++) {
    if (data[i].text.indexOf(search) !== -1) {
      tweetsByTopic.push(data[i])
    }
  }

  return tweetsByTopic
}
