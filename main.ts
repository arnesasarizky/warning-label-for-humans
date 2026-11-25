import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line warning label for every human being.
// The laugh lands at the end: the flaw is not a bug awaiting a fix,
// it is a permanent feature of the unit.
// The label is built from its three printed sentences, joined with a
// single space, exactly as they would appear on the sticker.
const LABEL_SENTENCES = [
  "WARNING: This unit may freeze without notice upon remembering something embarrassing from 2011.",
  "No patch is available.",
  "This is a permanent feature.",
];

const WARNING_LINE = LABEL_SENTENCES.join(" ");

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");

// The gate for this bounty: UTF-8 text, 1-160 characters, not only whitespace.
const MAX_LENGTH = 160;

function checkLabel(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("Warning label must not be empty or only whitespace.");
  }
  if (line.length > MAX_LENGTH) {
    throw new Error(
      `Warning label is ${line.length} characters, over the ${MAX_LENGTH}-character limit.`,
    );
  }
  if (line.includes("\n")) {
    throw new Error("Warning label must be a single line.");
  }
}

function printLabel(): void {
  checkLabel(WARNING_LINE);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, WARNING_LINE, "utf8");
}

printLabel();
