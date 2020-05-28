'use strict';
const http = require('http');
const fs = require('fs');
const htmlData = fs.readFileSync('./disp.html');

const server = http.createServer((req, res) => {
	console.info('[' + new Date() + '] Requested by ' + req.connection.remoteAddress);
	res.writeHead(200, {
		'Content-Type': 'text/html; charset=utf-8'
	});
	// res.write(req.headers['user-agent']);
	res.write(htmlData);
	res.end();
}).on('error', (e) => {
	console.error('[' + new Date() + '] Server Error', e);
}).on('clientError', (e) => {
	console.error('[' + new Date() + '] Client Error', e);
});
const port = 8000;
server.listen(port, () => {
	console.info(`[ ${new Date()} ] Listening on`, port);
});
