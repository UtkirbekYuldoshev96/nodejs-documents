const http = require('http');
const server = http.createServer((req, res) =>{
      if(req.url === '/'){
            res.write('asosiy sahifa');
            res.end();
      }

      if(req.url === '/api/books'){
            res.write(JSON.stringify(['Robbin sharma', 'sakkiz qoida', 'boy ota kambag\'al ota']));
            res.end();
      }
})
server.listen(7000);
console.log(`${server.address().port} portda ishlab ${server.url}turibdi `);