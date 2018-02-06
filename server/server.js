import express from 'express'
import React from 'react'

import { renderToString } from 'react-dom/server'

import App from '../client/App'

const app = express()

app.set('port', process.env.PORT || '8080')

app.use(express.static('public'))
app.get('/', (req, res) => {
  const content = renderToString(<App />)
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
        <div id="app">${content}</div>
        <script src="bundle.js"></script>
    </body>
    </html>
  `
  res.end(html)
})

app.listen(app.get('port'), () => {
  console.log(`Server running at port:${app.get('port')}`)
})
