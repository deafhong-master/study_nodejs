// 필요라이브러리 로딩.
const fs = require('fs')

// blocking example
console.log('===== block example =====');
const data = fs.readFileSync('file.md');
console.log(data.toString());
console.log('process completed.');
console.log('===== block example =====\n\n');

console.log('===== non-block example =====');
// non-blocking example
fs.readFile('file.md', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});
console.log('process completed.');
console.log('===== non-block example =====');


// blocking 와 non-blocking 을 섞을 때의 위험성.
// error 발생.
// fs.readFile('file.md', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });
// fs.unlinkSync('file.md');

// error 발생안함.
// fs.readFile('file.md', (readFileErr, data) => {
//     if (readFileErr) throw readFileErr;
//     console.log(data.toString());
//     fs.unlink('file.md', (unlinkErr) => {
//         if (unlinkErr) throw unlinkErr;
//     });
// });