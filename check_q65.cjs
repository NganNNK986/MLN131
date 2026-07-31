const fs = require('fs');
let data = fs.readFileSync('src/quiz-data.ts', 'utf8');

const regex = /{\s*id:\s*'q(\d+)',[\s\S]*?question:\s*'([^']+)',\s*options:\s*\[([\s\S]*?)\],\s*correctAnswerIndex:\s*(\d+)/g;
let match;
const res = [];
while ((match = regex.exec(data)) !== null) {
  res.push({
    id: match[1],
    q: match[2],
    options: match[3],
    ans: match[4]
  });
}
console.log("Total questions: " + res.length);
if (res[64]) {
  console.log("65th question in array:");
  console.log(res[64]);
}
