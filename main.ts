import * as fs from 'node:fs';
import * as path from 'node:path';

// Program to output our debugging haiku to the entry file.
// Captures the isolating bleakness of a 3 AM debugging session stopped by a breakpoint.
const haiku = `Null ref in the dark,
Breakpoint halts the crashing loop,
Coffee turns to ice.`;

// Guards against empty output or exceeding the 200-character brief limit.
if (haiku.length < 1 || haiku.length > 200) {
  console.error('Haiku length out of bounds');
  process.exit(1);
}

const outputDir = '/output';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'entry.txt'), haiku, 'utf-8');

// End of execution.
