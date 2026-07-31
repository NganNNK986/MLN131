const fs = require('fs');
let data = fs.readFileSync('src/quiz-data.ts', 'utf8');

const regex = /{\s*id:\s*'q(\d+)',[\s\S]*?question:\s*'([^']+)',\s*options:\s*\[([\s\S]*?)\],\s*correctAnswerIndex:\s*(\d+),/g;
let match;
const res = [];
while ((match = regex.exec(data)) !== null) {
  const idNum = parseInt(match[1]);
  if (idNum >= 61 && idNum <= 117) {
    const optsMatch = [...match[3].matchAll(/'([^']+)'/g)].map(m => m[1]);
    res.push({
      id: idNum,
      q: match[2],
      options: optsMatch,
      ansIdx: parseInt(match[4]),
    });
  }
}
fs.writeFileSync('q61_117.json', JSON.stringify(res, null, 2));
