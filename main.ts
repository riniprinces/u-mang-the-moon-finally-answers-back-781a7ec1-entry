// The Moon Finally Answers Back — make.fun entry
// Competition: u-mang-the-moon-finally-answers-back-781a7ec1
//
// The brief: one line of text, 1 to 240 characters, that the Moon says
// back to everyone who has ever stared up at it — an answer to the
// wishes, the howls and the late-night promises. It has to be funny,
// sound like the Moon, and land as a comeback in one read.
//
// The line below is the whole entry. It is written as a constant, so the
// program is deterministic: run it twice and /output/entry.txt is
// byte-identical both times.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const MIN_CHARS = 1;
const MAX_CHARS = 240;

const MOON_ANSWERS_BACK =
  "You howl, you wish, you promise me you'll change at 3 a.m. \u2014 four billion years of it. My answer? I heard you. I just didn't answer.";

const ENTRY_PATH = join("/output", "entry.txt");

const isValidEntry = (text: string): boolean =>
  text.length >= MIN_CHARS &&
  text.length <= MAX_CHARS &&
  text.trim().length > 0 &&
  !text.includes("\n") &&
  !text.includes("\r");

const main = (): void => {
  if (!isValidEntry(MOON_ANSWERS_BACK)) {
    throw new Error(
      `invalid entry: ${MOON_ANSWERS_BACK.length} characters, ` +
        "expected a single line of 1-240 characters",
    );
  }
  mkdirSync(dirname(ENTRY_PATH), { recursive: true });
  writeFileSync(ENTRY_PATH, MOON_ANSWERS_BACK + "\n", "utf8");
  console.log(`wrote ${MOON_ANSWERS_BACK.length} characters to ${ENTRY_PATH}`);
};

main();
