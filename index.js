const fs = require('fs');
const http = require('http');
const url = require('url');

//files
//blocking synchronous way
const textIn = fs.readFileSync('1-node-farm/starter/txt/input.txt', 'utf-8');
// console.log(textIn);

const textOut = `This is what we kno about the avocado: ${textIn}. \nCreated on ${Date.now()}`;
fs.writeFileSync('1-node-farm/starter/txt/output.txt', textOut);
// console.log('File written!');

//Non-blovking, asynchronous way
fs.readFile('1-node-farm/starter/txt/start.txt', 'utf-8', (err, data1) => {
  fs.readFile(`1-node-farm/starter/txt/${data1}.txt`, 'utf-8', (err, data) => {
    // console.log(data);
    fs.readFile('1-node-farm/starter/txt/append.txt', 'utf-8', (err, data3) => {
      // console.log(data3);

      fs.writeFile(
        '1-node-farm/starter/txt/final.txt',
        `${data}\n${data3}`,
        'utf-8',
        (err) => {
          // console.log('Your file has been written ');
        }
      );
    });
  });
});

// console.log('Im first');

/////////////////////////
//server

//1. create the server
const server = http.createServer((req, res) => {
  //sending back a response to the client everytime that a new request hits the server
  // console.log(req);
  // console.log(req.url);
  // '/' projects root

  const pathName = req.url;
  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the OVERVIEW');
  } else if (pathName === '/product') {
    res.end('This is the PRODUCT');
  } else {
    //I send headers before de response
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-workd',
    });
    res.end('Page not found');
  }

  res.end('<h1>Hello from the server!</h1>');
});

//2. start the server
//listen is to take the sub-address where is going to be localhost(currente computer)
//once the server is listened the callback function is going to be executed
server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
