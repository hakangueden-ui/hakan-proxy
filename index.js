import express from "express";
import request from "request";

const app = express();

// Dein SAP Demo21 Backend
const TARGET = process.env.TARGET_URL;  // kommt aus Render Env Vars

app.use((req, res) => {
  const targetUrl = TARGET + req.url;

  req.pipe(
    request({
      url: targetUrl,
      method: req.method,
      headers: {
        ...req.headers,
        host: "demo21.chemnitz.de.ibm.com"
      },
      rejectUnauthorized: false
    })
  ).pipe(res);
});

app.listen(3000, () => console.log("Proxy started on port 3000"));
