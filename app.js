const path = require('path');
const {sql} = require("./config/db")

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});
async function main() {
  await sql`CREATE TABLE if not exists product (id serial primary key, title varchar(255))`;
  const result = await sql`SELECT * FROM product`;
  console.log(result);
}

main();
app.listen(3000);
