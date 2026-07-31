const fs = require('fs');
const data = fs.readFileSync('src/quiz-data.ts', 'utf8');

const regex = /{\s*id:\s*'q(\d+)'[\s\S]*?explanation:\s*'([^']*)'\s*}/g;
let match;
let count = 0;
while ((match = regex.exec(data)) !== null) {
  const id = parseInt(match[1]);
  if (id >= 61 && id <= 117) {
    if (match[2] === '') {
      count++;
    }
  }
}
console.log("Empty explanations for 61-117: " + count);
