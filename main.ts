import { writeFileSync, mkdirSync } from "node:fs";

// One-Line Laugh-Off: exactly one funny line, 1-200 chars, to /output/entry.txt.
// Built as setup + three-beat twist so the punchline lands on a cold read.
const setup = "I told my AI assistant to act more human";
const twist = "now it ghosts my emails, misses deadlines, and blames the Wi-Fi.";
const line = `${setup} — ${twist}`;

// Self-check the gate before writing: 1-200 chars, not only whitespace.
if (line.length < 1 || line.length > 200 || !line.trim()) {
  throw new Error(`entry length ${line.length} fails the 1-200 char gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} chars`);
