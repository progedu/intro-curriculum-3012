'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
	console.info('[' + new Date() + '] Requested by ' + req.connection.remoteAddress);
	res.writeHead(200, {
		'Content-Type': 'text/plain',
		'charset': 'utf-8'
	});
	res.write(req.headers['user-agent']);
	res.end();
}).on('error', (e) => {
	console.error('[' + new Date() + '] Server Error', e);
}).on('clientError', (e) => {
	console.error('[' + new Date() + '] Client Error', e);
});
const port = 8000;
server.listen(port, () => {
	console.info('[' + new Date() + '] Listening on ' + port);
});
/*
Server Error と Client Error の起こし方 - tmux を使う
 - Server Error
[/]	$ tmux
[0]	$ node index.js
	Ctrl + b → c
[1]	$ node index.js
	Ctrl + b → 0
[0]	Server Error { [Error: listen EADDRINUSE :::8000]
【説明】tmux で二重に仮想端末を立ち上げ、両方で同じポートからサーバーを起動させる。

 - Client Error
[/]	$ tmux		
[0]	$ node index.js
	Ctrl + b → c
[1]	$ curl -X EVENT http://localhost:8000
	Ctrl + b → 0
[0]	Client Error { [Error: Parse Error] bytesParsed: 1, code: 'HPE_INVALID_METHOD' }
【説明】tmux で二重に仮想端末を立ち上げ、一方でサーバーを起動する。もう一方で、-X 適当なメソッド名（EVENT）を付けて curl でアクセスする。（N予備校「HTTP のメソッド」）
*/
