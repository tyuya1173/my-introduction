import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

const app = express();
const PORT = 9000;

app.use(express.static('public'));

app.get('*', (req, res) => {
  const appString = ReactDOMServer.renderToString(React.createElement(App));
  const html = `
    <!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <title>自己紹介（SSR）</title>
      </head>
      <body>
        <div id="root">${appString}</div>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});