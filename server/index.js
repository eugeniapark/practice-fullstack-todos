const app = require('./app.js');

const PORT = 3000;

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Listening on port: ', PORT);
  }
});