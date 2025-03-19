import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App"; // 修正: 必要に応じてインポート方法を調整

const app = express();
const PORT = 9000;

app.get("/", (req, res) => {
  // JSX構文を使う前にReactをインポートしていることを確認
  const reactApp = renderToString(React.createElement(App)); // JSX使用を避ける方法
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR React App</title>
    </head>
    <body>
        <div id="root">${reactApp}</div>
        <script src="/client.js" defer></script>
    </body>
    </html>
  `;
  res.send(html);
});

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});