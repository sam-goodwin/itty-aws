/**
 * Modrinth SDK Code Generator
 *
 * Modrinth publishes its OpenAPI 3.0 spec at https://docs.modrinth.com/openapi.yaml.
 * There is no git submodule for this SDK — the spec is fetched on demand and
 * cached to specs/openapi.yaml. The YAML is converted to JSON in-memory before
 * being handed to the shared OpenAPI generator (which only consumes JSON).
 */
import * as fs from "fs";
import * as path from "path";
import YAML from "yaml";
import { generateFromOpenAPI } from "@distilled.cloud/core/openapi/generate";

const SPEC_URL = "https://docs.modrinth.com/openapi.yaml";

const rootDir = path.join(import.meta.dir, "..");
const specsDir = path.join(rootDir, "specs");
const yamlPath = path.join(specsDir, "openapi.yaml");
const jsonPath = path.join(specsDir, "openapi.json");

if (!fs.existsSync(specsDir)) {
  fs.mkdirSync(specsDir, { recursive: true });
}

async function fetchSpec(): Promise<string> {
  const res = await fetch(SPEC_URL);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch Modrinth OpenAPI spec from ${SPEC_URL}: ${res.status} ${res.statusText}`,
    );
  }
  return await res.text();
}

const yamlContent = process.env.MODRINTH_SPEC_OFFLINE && fs.existsSync(yamlPath)
  ? fs.readFileSync(yamlPath, "utf-8")
  : await fetchSpec();

fs.writeFileSync(yamlPath, yamlContent);

// Modrinth's spec uses compound path parameter names like `id|slug`,
// `id|username`, and `id|number` to signal "either an ID or a human-readable
// alias". Pipe characters are not valid in JS identifiers, so the generated
// Schema.Struct property keys come out unquoted and break TypeScript parsing.
// Rename them to JS-safe equivalents before generation. Every occurrence in
// the spec is either a `name:` parameter declaration or a `{...}` path
// template — there are no prose mentions, so a string replace is safe.
const normalizedYaml = yamlContent
  .replaceAll("id|slug", "id_or_slug")
  .replaceAll("id|username", "id_or_username")
  .replaceAll("id|number", "id_or_number");

const spec = YAML.parse(normalizedYaml);
fs.writeFileSync(jsonPath, JSON.stringify(spec, null, 2));

try {
  generateFromOpenAPI({
    specPath: jsonPath,
    patchDir: path.join(rootDir, "patches"),
    outputDir: path.join(rootDir, "src/operations"),
    importPrefix: "..",
    clientImport: "../client",
    traitsImport: "../traits",
    sensitiveImport: "../sensitive",
    errorsImport: "../errors",
    includeOperationErrors: true,
    skipDeprecated: true,
  });
} finally {
  if (fs.existsSync(jsonPath)) {
    fs.unlinkSync(jsonPath);
  }
}
