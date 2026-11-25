import { mkdirSync, writeFileSync } from "node:fs";

// The harness reads exactly this file, so keep the path in named
// constants instead of repeating the literal in the write call.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

const ENTRY = "fix: end race condition by giving every logged-in user the same session";

// The gate rejects anything outside 1-100 chars, blank, or multi-line,
// so fail loudly here instead of writing an invalid entry.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 100 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n") ||
  ENTRY.includes("\r")
) {
  throw new Error("ENTRY must be a single non-blank line of 1-100 characters");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY, "utf8");
