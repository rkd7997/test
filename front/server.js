const express = require('express');
const next = require('next');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3060;
const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  if (prod) {
    server.use(morgan('combined'));
  } else {
    server.use(morgan('dev'));
  }

  server.use('/', express.static(path.join(__dirname, 'public')));
  server.use('/build/', express.static(path.join(__dirname, 'build')));
  server.use('/_next/', express.static(path.join(__dirname, 'build')));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
