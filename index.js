const path = require('path');
const os = require('os');
const fs = require('fs');

// setInterval()
// setTimeout()
// cearInterval()
// clearTimeout()
// const logger = require('./logger');
// console.log(logger);


const pathObj = path.parse(__filename);
const baseFilen = path.basename(__filename); // fayl nomi
const baseDir = path.basename(__dirname); // papkani nomi
// console.log(pathObj);
// console.log(baseFilen);
// console.log(baseDir);

const joinFile = path.join(__filename);
const joinDir = path.join(__dirname);
// console.log(joinFile);
// console.log(joinDir);

const normalizimFile = path.normalize(__filename);
const normalizimDir = path.normalize(__dirname);

// console.log(normalizimDir);
// console.log(normalizimFile);

const fremMem = os.freemem();
const userInfo = os.userInfo()
const value = (fremMem / 1024).toFixed(2);
// console.log(`Xotirada bo'sh qolgan xotira hajmi ${fremMem} baytda`);
// console.log(`Foydalanuvchi haqida ma'lumot ${userInfo.username}`);
// console.log(`Kompyuter xotirangizda ${value} MB bor`);

const fsRerder = fs.readdirSync('./'); // papkada files nomi va tuplami
// const fileDir = fs.readdir('file', (err, files) => {
//       if(err){
//             console.log(err);
//       }else{
//             console.log(files);
//       }
// });
// console.log(fsRerder);


// fs.readFile('./index.js', 'utf8',(err, fileContent) => {
//       if(err){
//             throw err;
//       }
//       console.log(fileContent);
// })

// fs.writeFile('./index.js', (err, fileSystems)=> {
//       if(err){
//             throw err;
//       }else{
//             console.log(fileSystems);
//       }
// })

const data = new Uint8Array(Buffer.from(`Assalomu allaykum nodejs dasturlash tili xush kelibsizlar`));
fs.writeFile('data.txt', data, (err) => {
  if (err) throw err;
  console.log('Fayl saqlandi!');
});