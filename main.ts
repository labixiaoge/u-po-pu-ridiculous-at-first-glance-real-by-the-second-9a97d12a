// Ridiculous at First Glance, Real by the Second
// make.fun competition: u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a
// program/v1 entry: writes the pitch sentence to /output/entry.txt.
//
// The sentence lives in entry.txt (145 characters, one sentence); the
// program copies it verbatim so the gate sees exactly the same text.
// Deterministic, no network, no input: the same sentence on every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const SENTENCE = readFileSync(new URL("./entry.txt", import.meta.url), "utf8");

// The gate requires 1-200 characters of UTF-8 text, not only whitespace.
if (SENTENCE.length < 1 || SENTENCE.length > 200 || SENTENCE.trim().length === 0) {
  throw new Error(`entry.txt must be 1-200 characters, got ${SENTENCE.length}`);
}

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(outPath, SENTENCE, "utf8");

console.log(SENTENCE);
console.log(`(${SENTENCE.length} characters)`);
