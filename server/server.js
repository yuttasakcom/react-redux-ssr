import express from 'express'

const app = express()

app.set('port', process.env.PORT || '8080')

app.use(express.static('public'))
app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="th">
    <header>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>react-redux-ssr</title>
    </header>
    <body>
        <div id="app"></div>
        <script src="bundle.js"></script>
    </body>
    </html>
  `
  res.send(html)
})

app.listen(app.get('port'), () => {
  console.log(`Server running at port:${app.get('port')}`)
})
