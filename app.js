const Koa = require('koa');

const port = 8080;
const greetingName = process.env.GREETING_NAME ?? '__not_set__';
new Koa()
    .use(async ctx => {
        ctx.body = `Hello, ${greetingName}`;
    })
    .listen(port, () => {
        console.log(`Ready to receive requests on ${port}`);
    })
