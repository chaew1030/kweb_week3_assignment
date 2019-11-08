var calc = require('./calc');
var http = require('http');
var url = require('url');
var querystring =require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');

	const parseURL = url.parse(req.url); 
	if(parseURL.pathname != '/') 
	{
		res.statusCode = 404;
		res.end('Page Not Found');
	}

	const queryObj = querystring.parse(parseURL.query);
	if(!queryObj.a || !queryObj.b || !queryObj.operator)
	{
		res.statusCode = 404;
		res.end('Invalid Query');
	}
	

	//const a = queryObj.a;
	//const b = queryObj.b;
	const a = parseInt(queryObj.a);
	const b = parseInt(queryObj.b);
	const op = queryObj.operator;

	if(op == 'add')
		res.end(`${calc.add(a,b)}`);
		//res.end(calc.add(a, b));
	else if(op == 'subtract')
		res.end(`${calc.subtract(a,b)}`);
		//res.end(calc.subtract(a, b));
	else if(op == 'multiply')
		res.end(`${calc.multiply(a,b)}`);
		//res.end(calc.multiply(a,b));
	else if(op == 'divide')
		res.end(`${calc.divide(a,b)}`);
		//res.end(calc.divide(a,b));
	else if(op == 'memory')
		res.end(`${calc.memory(a,b)}`);
		//res.end(calc.memory(a,b));

});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
