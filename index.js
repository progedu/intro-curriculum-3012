'use strict';

// httpのモジュールを読み込む
const http = require('http');

// サーバーを作成
const server = http.createServer((req, res) => {
    // ログを出力
    console.info(`[ ${new Date()} Requested by ${req.connection.remoteAddress}`);
    // レスポンスヘッダ
    res.writeHead(200, {
        'Content-Type' : 'text/plain; charset=utf-8'
    });
    // レスポンスの内容
    res.write(req.headers['user-agent']);
    // res.write("Hello");
    // レスポンスの書き出し終了
    res.end();
// サーバエラーのエラーログを出力
}).on('error', (e) => {
    console.error(`[ ${new Date()} ] Server Error`, e);
// クライアントエラーのエラーログを出力
}).on('clientError', (e) => {
    console.error(`[ ${new Date()} ] client Error`, e);
});

// httpが起動するポートを設定
const port = 8000;
// サーバーを起動
server.listen(port, () => {
	// ログを出力
	console.info(`[ ${new Date()} ] Listening on ${port}`);
});
