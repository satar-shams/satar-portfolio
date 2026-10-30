import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

function loadPortfolio(filename: string) {
  const configPath = path.resolve(
    process.cwd(),
    `src/config/${filename}`,
  );

  const file = fs.readFileSync(configPath, "utf-8");

  return YAML.parse(file);
}

export const portfolios = {
  ru: loadPortfolio("portfolio.ru.yaml"),
  en: loadPortfolio("portfolio.en.yaml"),
};

export type Language = keyof typeof portfolios;

export const defaultLanguage: Language = "ru";