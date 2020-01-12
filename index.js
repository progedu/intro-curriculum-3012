'use strict'
const http = require('http')
const server = http
  .createServer((req, res) => {
    // 情報を出力したいという意図を明確にするためにlogではなくinfoを使う
    // req.connection.remoteAddress でリクエストが送られたIPアドレス
    console.info(
      '[' + new Date() + '] Requested By ' + req.connection.remoteAddress
    )
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8'
    })
    res.write(req.headers['user-agent'])
    res.end()
  })
  .on('error', e => {
    // 'error'という文字列のイベントが発生した時はサーバーエラーとしてエラーログ出力
    console.error('[' + new Date() + '] Server Error', e)
  })
  .on('clientError', e => {
    // 'client error'という文字列のイベントが発生した時はクライアントエラーとしてエラーログ出力
    console.error('[' + new Date() + '] Client Error', e)
  })
const port = 8000
server.listen(port, () => {
  console.info('[' + new Date() + '] Listening on ' + port)
})
