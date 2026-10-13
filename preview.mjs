import http from 'node:http';
import fs from 'node:fs';
const root=new URL('./dist/',import.meta.url);
http.createServer((req,res)=>{const u=new URL(req.url,'http://localhost');const name=u.pathname==='/'?'index.html':u.pathname.slice(1);if(!['index.html','style.css','app.js'].includes(name)){res.writeHead(404);res.end('Not found');return;}res.setHeader('Content-Type',name.endsWith('.html')?'text/html;charset=utf-8':name.endsWith('.css')?'text/css;charset=utf-8':'text/javascript;charset=utf-8');res.end(fs.readFileSync(new URL(name,root)));}).listen(8734,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:8734'));
