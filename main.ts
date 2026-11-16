// ai-excited-01 entry (Node 22, standard library only).
// The image beside this file is the entry: copy it to the output
// directory as entry.png. The gate reads exactly those bytes.
//
// Run outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
copyFileSync(src, join(outDir, 'entry.png'));
