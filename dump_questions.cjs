const fs = require('fs');
const data = fs.readFileSync('src/quiz-data.ts', 'utf8');

const regex = /{\s*id:\s*'q(\d+)',[\s\S]*?question:\s*'([^']+)',\s*options:\s*\[([\s\S]*?)\],\s*correctAnswerIndex:\s*(\d+),\s*explanation:\s*'([^']*)'\s*}/g;
let match;
const qlist = [];
while ((match = regex.exec(data)) !== null) {
  const idNum = parseInt(match[1]);
  if (idNum >= 61 && idNum <= 117 && match[5] === '') {
    qlist.push({
      id: match[1],
      q: match[2],
      ansIndex: match[4]
    });
  }
}
fs.writeFileSync('missing_expl.json', JSON.stringify(qlist, null, 2));
console.log("Dumped " + qlist.length + " questions.");
