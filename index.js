'use strict';
//httpモジュールの読み込み
const http = require('http');
//httpサーバーの作成
const server = http.createServer((req, res) => {
	//リクエストが来た際の処理
	console.info('[' + new Date() + '] Requested by ' + req.connection.remoteAddress);
	//200というステータスコードとともにレスポンスヘッダを書き込む
	res.writeHead(200, {
		'Content-Type': 'text/plain; charset=utf-8'
	});
	//リクエストヘッダのuser-agentの中身を書き込む
	res.write(req.headers['user-agent']);
	//レスポンスの書き出し終了
	res.end();
//onメソッドでerrorというイベントが起きたとき以下の無名関数を呼び出す
}).on('error', (e) => {
	console.error('[' + new Date() + '] Server Error', e);
//onメソッドでclientErrorというイベントが起きたとき以下の無名関数を呼び出す
}).on('clientError', (e) => {
	console.error('[' + new Date() + '] Client Error', e);
});
const port = 8000;
//8000番ポートでサーバーを起動し、以下のログを表示
server.listen(port, () => {
	//ログとして残す情報
	console.info( '[' + new Date() + '] Listening on ' + port);
});
