const fs = require('fs');
const data = fs.readFileSync('src/quiz-data.ts', 'utf8');

const regexExpl = /{\s*id:\s*'q(\d+)',[\s\S]*?explanation:\s*'([^']*)'\s*}/g;
let match;
const expls = {};
while ((match = regexExpl.exec(data)) !== null) {
  expls[match[1]] = match[2];
}

for (let i = 61; i <= 117; i++) {
  if (expls[i] && (expls[i].length < 60 || !expls[i].includes('Giải thích: '))) {
    console.log(`Q${i} needs better explanation: ${expls[i]}`);
  } else if (!expls[i]) {
    console.log(`Q${i} missing explanation`);
  }
}
