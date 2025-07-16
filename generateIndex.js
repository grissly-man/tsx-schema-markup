const { readdirSync, writeFileSync } = require("fs");
const path = require("path");

function trainToPascal(input) {
  return input
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

const files = readdirSync("./src")
  .map((f) => f.replace(/\.tsx?$/, ""))
  .filter((f) => f !== "index")
  .map((f) => `export * as ${trainToPascal(f)} from "./${f}"`)
  .join("\n");

writeFileSync(path.join(__dirname, "src", "index.ts"), files);
