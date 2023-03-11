const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {

    var extToMimes = {
      'xml': 'application/xml',
      'json':'application/json',
       'jpg': 'image/jpeg',
       'jpeg': 'image/jpeg',
       'png': 'image/png',
       
    };

  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/plain');
  ws = req.url;
  indDot = ws.lastIndexOf('.');
  ctype = 'text/xml';
  if ( indDot>0 ) {
    extension = ws.substring(indDot+1).toLowerCase();
    if (extToMimes.hasOwnProperty(extension)) {
           ctype= extToMimes[extension];
           console.log('Response Content Type:'+ctype);
           res.setHeader('Content-Type', ctype);
        }
        


  }
  
  const fs = require('fs');

fs.readFile(req.url.substring(1), 'utf8', (err, data) => {
  if (err) {
    res.statusCode = 500;
    res.end("File Not Found");
    console.log("File Not Found Error:"+req.url.substring(1));
    return;
  }

  res.end(data);
});
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});