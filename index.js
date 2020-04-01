'use strict';
const http = require('http');
const date = new Date();
const server = http.createServer((req, res) => {
	console.info(`[ ${date} ] Requested by ${req.connection.remoteAddress}`);
	res.writeHead(200, {
		'Content-Type': 'text/plain; charset=utf-8'
	});
	res.write(req.headers['user-agent']);
	res.end();
}).on('error', (e) => {
	console.error(`[ ${date} ] Server Error`, e);
}).on('clientError', (e) => {
	console.error(`[ ${date} ] Client Error`, e);
});
const port = 8000;
server.listen(port, () => {
	console.info(`[ ${date} ] Listening on ${port}`);
});
