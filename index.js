'use strict';
// HTTPモジュールの読み込み
const http = require('http');
// HTTPモジュールの機能でサーバーを作成する
// サーバーにリクエストがあったときのみ無名関数が実行される
const server = http.createServer((req, res) => {
	// console.info関数で情報のログをコンソールに出力
	// connectionプロパティのremoteAddressプロパティを取得する（IPアドレス）
	console.info('[' + new Date() + '] Requested by ' + req.connection.remoteAddress);
	// レスポンスヘッダに書き出しをする
	// 正常に通信できたときのステータスコード200
	// コンテンツの内容と文字コード
	res.writeHead(200, {
		'Content-Type': 'text/plain; charset=utf-8'
	});
	// ユーザーエージェントを記述する
	res.write(req.headers['user-agent']);
	// レスポンスの書き出しを終了する
	res.end();
	// エラーの発生を検知する
}).on('error', (e) => {
	console.error('[' + new Date() + '] Server Error', e);
	// クライアントエラーの発生を検知する
}).on('clientError', (e) => {
	console.error('[' + new Date() + '] Client Error', e);
});
// HTTPが起動するポートを宣言する
const port = 8000;
// HTTPサーバーを起動する
// 特定のポート（8000）からリクエストがないか監視する
server.listen(port, () => {
	// console.log('Listening on ' + port);
	console.info('[' + newDate() + '] Server Start ' + port);
});
