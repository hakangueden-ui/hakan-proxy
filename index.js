{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import express from "express";\
import request from "request";\
\
const app = express();\
\
// Dein SAP Demo21 System\
const TARGET = "https://demo21.chemnitz.de.ibm.com:44300";\
\
app.use((req, res) => \{\
  const url = TARGET + req.url;\
\
  req\
    .pipe(\
      request(\{\
        url,\
        method: req.method,\
        headers: \{\
          ...req.headers,\
          host: "demo21.chemnitz.de.ibm.com",\
        \},\
        rejectUnauthorized: false, // SSL vom IBM Demo21 System akzeptieren\
      \})\
    )\
    .pipe(res);\
\});\
\
app.listen(3000, () => console.log("Proxy started on port 3000"));\
}