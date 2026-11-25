const express = require('express')
const app = express()

const musicals = 
[{length: 150, title:"Chicago"},
  {length: 165, title: "Hamilton"},
  {length: 174, title: "The Sound of Music"},
  {length: 165, title: "Wicked"},
  {length: 150, title: "Heathers"}
]

app.get('/', function(req, resp){
  resp.send('Hello world')
})

app.get("/musicals/list", function(req,resp){
  let titles = []
  for (let musical in musicals){
    titles.push(musical.title)
  }
  resp.send(titles)
})

app.listen(8090)