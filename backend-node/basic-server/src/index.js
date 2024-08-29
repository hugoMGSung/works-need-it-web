const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
	ctx.body = 'Hello KOA!';
});

app.listen(5500, () => {
	console.log('Listening to port 5500');
});