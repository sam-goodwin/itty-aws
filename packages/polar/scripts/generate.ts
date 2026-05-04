/**
 * Polar SDK Code Generator
 *
 * Uses the shared OpenAPI generator from sdk-core to generate operations from
 * Polar's OpenAPI 3.1 spec.
 */
import * as path from "node:path";
import { generateFromOpenAPI } from "@distilled.cloud/core/openapi/generate";

const rootDir = path.join(import.meta.dir, "..");

generateFromOpenAPI({
  specPath: path.join(
    rootDir,
    "specs/distilled-spec-polar/specs/openapi.json",
  ),
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
