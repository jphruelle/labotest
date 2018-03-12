const path = require('path');
const express = require('express');
const app = express();
const hbs = require('express-hbs');
const routes = require('./site/routes/index');
const promisify = require('es6-promisify');
const glob = require('glob');
const globP = promisify(glob);

app.engine('hbs', hbs.express4({
    partialsDir: [`${__dirname}/site/views/partials`],
    defaultLayout: `${__dirname}/site/views/layouts/main.hbs`
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/site/views'));

app.use(express.static('public'));
app.use('/', routes);
// async function initializeModels() {
//     const models = await globP('./site/**/models/*.js', { root: __dirname });
//     models.map(item => require(path.join(process.cwd(), item)));
// }

async function init() {
    require('dotenv').config({ path: 'variables.env' });
    //await initializeModels();
    app.set('port', process.env.PORT || 7777);
    const server = app.listen(app.get('port'));
    console.log(`Express running → PORT ${server.address().port}`);
    //module.exports = app;
}
init()

