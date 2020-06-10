import http from 'http'
import { promises as fs } from 'fs'

async function handleReq ({ url }) {
  try {
    switch (url) {
      case '/':
        return await fs.readFile('index.html', 'utf-8')
      case '/about.html':
        return await fs.readFile('about.html', 'utf-8')
    }
  } catch (e) {
    throw Error(e)
  }
}

http.createServer(async (req, res) => {
  res.statusCode = 200
  // set header says what type is coming back from response

  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  res.end(await handleReq(req))
}).listen(5000)
