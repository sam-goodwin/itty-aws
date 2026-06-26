/**
 * Turbopuffer SDK Code Generator
 *
 * Uses the shared OpenAPI generator from sdk-core to generate operations
 * from the Turbopuffer OpenAPI 3.1 spec.
 *
 * The turbopuffer spec ships as YAML; the generator only consumes JSON, so we
 * parse it to a temporary JSON file first (the one unavoidable pre-step).
 *
 * Everything else is handled declaratively: `patches/001-add-operation-ids.patch.json`
 * adds the missing operationIds and drops the three Stainless `?stainless_overload=`
 * virtual paths, applied by the generator before it extracts operations.
 *
 * The three Stainless-overload operations (BranchFromNamespace, CopyFromNamespace,
 * MultiQueryNamespace) are hand-authored in `src/operations/manual/`. The generator
 * overwrites `src/operations/index.ts` on every run, so the manual barrel is
 * re-exported by appending to it here.
 */
import * as fs from "fs";
import * as path from "path";
import { parse as parseYaml } from "yaml";
import { generateFromOpenAPI } from "@distilled.cloud/core/openapi/generate";

const rootDir = path.join(import.meta.dir, "..");

const specYamlPath = path.join(rootDir, "specs/turbopuffer-openapi/openapi.yml");
const specJsonPath = path.join(
  rootDir,
  "specs/turbopuffer-openapi/openapi.generated.json",
);

// YAML -> JSON (the generator reads JSON only).
const yamlContent = fs.readFileSync(specYamlPath, "utf-8");
const spec = parseYaml(yamlContent);
fs.writeFileSync(specJsonPath, JSON.stringify(spec, null, 2));

try {
  generateFromOpenAPI({
    specPath: specJsonPath,
    patchDir: path.join(rootDir, "patches"),
    outputDir: path.join(rootDir, "src/operations"),
    importPrefix: "..",
    clientImport: "../client",
    traitsImport: "../traits",
    sensitiveImport: "../sensitive",
    errorsImport: "../errors",
    includeOperationErrors: false,
    skipDeprecated: true,
  });

  // Re-export the hand-authored Stainless-overload operations. The generator
  // rewrites operations/index.ts from scratch, so append the manual barrel.
  fs.appendFileSync(
    path.join(rootDir, "src/operations/index.ts"),
    'export * from "./manual/index.ts";\n',
  );
} finally {
  fs.unlinkSync(specJsonPath);
}
