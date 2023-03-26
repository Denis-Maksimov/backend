//---------------------------------------------------
//
//---------------------------------------------------

import express from 'express';
import path from 'path';
import https from 'https';
var fs = require('fs');
// const PORT:number = Number(process.env.PORT)??3000;
const PORT:number = 4430;


console.log(PORT)
const app=express()


app.get('/',(req:any,res:any)=>
{
    // console.log(typeof res);
    res.sendFile(path.resolve(__dirname,'static','index.html'));
    // res.download
    res.send('<h1>Hello world and TS</h1>');
});

app.get('/download',(req:any,res:any)=>
{
    res.download(path.resolve(__dirname,'static','index.html'));
});

// https.

app.listen(PORT,()=>
{
    console.log(`ura ${PORT}`);
})


https.createServer(
    {
        key:fs.readFileSync('sslcert/server.key', 'utf8'),
        cert:fs.readFileSync('sslcert/server.crt', 'utf8')  
    }, 
    (req, res) => {
        res.writeHead(200);
        res.end('hello world\n');
      }).listen(4400);

//---------------------------------------------------
//---------------------------------------------------

