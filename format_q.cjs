const fs = require('fs');
const qs = JSON.parse(fs.readFileSync('q60_117.json', 'utf8'));

qs.forEach(q => {
  console.log(`Q${q.id}: ${q.question}`);
  q.options.forEach((opt, i) => console.log(`  ${i}: ${opt}`));
});
