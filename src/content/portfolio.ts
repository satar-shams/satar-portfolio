import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

const configPath = path.resolve(
  process.cwd(),
  "src/config/portfolio.yaml",
);

const file = fs.readFileSync(configPath, "utf-8");

export const portfolio = YAML.parse(file);
