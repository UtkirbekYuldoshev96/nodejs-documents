// vazifa shu metodlar bilan ishlash
// writefile(), rename(), unlink()
const Eventemmit = require('events');
const emmiter = new Eventemmit();
emmiter.on('messege', () => {
  console.log(`Messege chqairildi`);
})


const fs = require('fs');
const { emit } = require('process');
const pathsToCheck = ['./nodejs', './nodejs/file.txt'];

for (let i = 0; i < pathsToCheck.length; i++) {
  fs.Stats(pathsToCheck[i], (err, fs) => {
    console.log(fs.isDirectory());
    console.log(fs);
  });
}

emmiter.emit('messege');