import http from 'http'
import { promises as fs } from 'fs'
import formidable from 'formidable'

async function handleGet ({ url }) {
  if (!url.slice(1)) {
    url = '/index.html'
  }

  const HTMLFile = url.includes('.') ? url : `${url}.html`

  try {
    // url.slice(1)takes out forward slash
    return await fs.readFile(HTMLFile.slice(1), 'utf-8')
  } catch (e) {
    throw Error(e)
  }
}

function handlePost (req) {
  const form = new formidable.IncomingForm()
  form.parse(req, (err, fields) => {
    if (err) {
      throw new Error(err)
    }
    console.log(fields)
  })

  return '<p>Done with post!</p>'
}

async function handleReq (req) {
  switch (req.method) {
    case 'GET':
      return handleGet(req)
    case 'POST':
      return handlePost(req)
  }
}

http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  try {
    res.statusCode = 200
    res.end(await handleReq(req))
  } catch (e) {
    res.statusCode = 404
    res.end('<p>Page not found</p>')
  }
}).listen(5000)
