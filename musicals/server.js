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
  for (let musical of musicals){
    titles.push(musical.title)
  }
  resp.send(titles)
})

app.get("/musicals/search", function(req,resp){
  let term = req.query.search_term.toLowerCase()
  let titles = []
  for (let musical of musicals){
    if(musical.title.toLowerCase().includes(term)){
      titles.push(musical.title)
    }
  }
  resp.send(titles)
})

app.get("/musical/:id", function(req,resp){
  let id = req.params.id
  resp.send(musicals[id])
})

app.listen(8090)