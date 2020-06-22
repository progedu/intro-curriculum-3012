'use strict';
const http = require('http');    // httpモジュールのインポート
const server = http.createServer((req, res) => {    // http.createServerでサーバーを立てる
	console.info('[' + new Date() + '] Requested by ' + req.connection.remoteAddress);    // 標準出力 requestオブジェクトからリモートアドレスを取得
	res.writeHead(200, {    // 成功を示すステータスコード200
		'Content-Type': 'text/plain; charset=utf-8'    // reponseとして返す文字列を定義
	});
	res.write(req.headers['user-agent']);   // requestオブジェクトのuserAgentを返す
	res.end();
}).on('error', (e) => {    // errorイベントが起こったら無名関数を実行（引数 e の中にはエラー内容が代入される）
	console.error('[' + new Date() + '] Server Error', e);
}).on('clientError', (e) => {
	console.error('[' + new Date() + '] Client Error', e);
});
const port = 8000;
server.listen(port, () => {
	console.info('[' + new Date() + ']' + 'Listening on ' + port);    // 標準出力
});
