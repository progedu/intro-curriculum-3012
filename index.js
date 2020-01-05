'use strict';
const http = require('http');
const port = 8000;
const server = http.createServer((req, res) => {
	console.info(`[${new Date}] Requested by ${req.connection.remoteAddress}`);
	//console.info('[' + new Date() + '] Requested by ' + req.connection.remoteAddress);
	res.writeHead(200, {
		'Content-Type': 'text/plain; charset=utf-8'
	});
	res.write(req.headers['user-agent']);
	res.end();
	//eの役割について
	//イベントには関数を登録しておき，関数を実行する流れ
	//errorイベントがきたらe関数を使う
	//eの中に引数を使える
	//エラーで分岐してもいい
	//ADDRINUSEなのかどうかとか
}).on('error', (e) => {
	var obj = e;
	//-1なら存在せず，それ以外なら存在する
	var result = obj.toString().indexOf('EADDRINUSE');
	if(result > 0)
	{
		console.error(`[${new Date()}] Server Error`, e);
		console.error(`PORT番号が既に使用されています． PORT番号は${port}番です．\n一旦起動しているサーバーをCtr+cで停止するかターミナルにて\n[コマンド]\nps\n\nを実行し，該当のプロセス番号を用いて\n[コマンド]\nkill [プロセス番号]\n\nを実行して下さい\n\n-例----------\n[コマンド]\nvagrant@ubuntu-bionic:~/workspace/intro-curriculum-3012$ ps\n[実行結果]\nPID TTY          TIME CMD\n3355 pts/1    00:00:00 bash\n4023 pts/1    00:00:00 ps\n\n[コマンド]\nvagrant@ubuntu-bionic:~/workspace/intro-curriculum-3012$kill 4023\n----------`);
		//console.error('[' + new Date() + '] Server Error', e);
	}
}).on('clientError', (e) => {
	console.error(`[${new Date()}] Client Error`, e);
	//console.error('[' + new Date() + '] Client Error', e);
});

server.listen(port, () => {
	console.info(`[${new Date()}] Listenning on ${port}`);
	//console.info('[' + new Date() + '] Listening on ' + port);
});
