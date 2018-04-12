const { createServer } = require('http');
const next = require('next');

const app = next({
    dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes');
const handlder = routes.getRequestHandler(app);

app.prepare().then(() => {
    createServer(handlder).listen(3000, (err) => {
        if (err) throw err;
        console.log('Ready on localhost:3000');
    })
});