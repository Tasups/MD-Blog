const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: new Date(),
      description:
        "This is a description to test out the forEach method in regards to displaying information dynamically",
    },
    {
      title: "Test Article TWO",
      createdAt: new Date(),
      description:
        "This is a description to test out the forEach method in regards to displaying information dynamically. But this time it's for another object, so, there's that.",
    },
  ];
  res.render("articles/index", { articles: articles });
})

app.listen(5000)