// One-Line Roast: The Gadget You Use Every Day
// Roasts a daily app: the password manager that judges your password
// and then betrays its own judgment by autofilling it into a
// sandwich shop's rewards account. Dry wit, one ironic action,
// one concrete detail, no wasted words.
const fs = require('node:fs');

const line = "My password manager calls my work password weak, then "
  + "autofills it into a sandwich shop's rewards account.";

if ([...line].length > 200) {
  throw new Error('line exceeds 200 characters');
}
if (line.includes('\n') || line.includes('\r')) {
  throw new Error('line must be a single line');
}

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', line);
