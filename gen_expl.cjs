const fs = require('fs');
let data = fs.readFileSync('src/quiz-data.ts', 'utf8');

const regex = /{\s*id:\s*'q(\d+)',[\s\S]*?question:\s*'([^']+)',\s*options:\s*\[([\s\S]*?)\],\s*correctAnswerIndex:\s*(\d+),\s*explanation:\s*'([^']*)'\s*}/g;
let match;
const updates = {};
while ((match = regex.exec(data)) !== null) {
  const idNum = parseInt(match[1]);
  if (idNum >= 61 && idNum <= 117 && match[5] === '') {
    // Parse options manually
    const optionsStr = match[3];
    // This is a rough split, assuming options don't contain ', ' inside them if we use regex.
    // Actually, let's use eval or regex to extract array elements.
    const optsMatch = [...optionsStr.matchAll(/'([^']+)'/g)].map(m => m[1]);
    const correctIdx = parseInt(match[4]);
    if (optsMatch[correctIdx]) {
      const correctText = optsMatch[correctIdx];
      // Generate explanation
      let expl = correctText;
      if (expl.length > 100) {
        expl = expl.substring(0, 97) + '...';
      }
      updates['q' + match[1]] = 'Giải thích: ' + expl;
    }
  }
}

let newData = data;
for (const id in updates) {
  const expl = updates[id];
  // Replace the empty explanation for this specific id
  const replaceRegex = new RegExp(`(id:\\s*'${id}',[\\s\\S]*?explanation:\\s*)''`);
  newData = newData.replace(replaceRegex, `$1'${expl}'`);
}

fs.writeFileSync('src/quiz-data.ts', newData);
console.log('Updated explanations for ' + Object.keys(updates).length + ' questions.');
