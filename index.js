const fs = require('fs');

//blocking synchronous way
const textIn = fs.readFileSync('1-node-farm/starter/txt/input.txt', 'utf-8');
// console.log(textIn);

const textOut = `This is what we kno about the avocado: ${textIn}. \nCreated on ${Date.now()}`;
fs.writeFileSync('1-node-farm/starter/txt/output.txt', textOut);
// console.log('File written!');

//Non-blovking, asynchronous way
fs.readFile('1-node-farm/starter/txt/start.txt', 'utf-8', (err, data1) => {
  fs.readFile(`1-node-farm/starter/txt/${data1}.txt`, 'utf-8', (err, data) => {
    console.log(data);
    fs.readFile('1-node-farm/starter/txt/append.txt', 'utf-8', (err, data3) => {
      console.log(data3);

      fs.writeFile(
        '1-node-farm/starter/txt/final.txt',
        `${data}\n${data3}`,
        'utf-8',
        (err) => {
          console.log('Your file has been written ');
        }
      );
    });
  });
});

console.log('Im first');
