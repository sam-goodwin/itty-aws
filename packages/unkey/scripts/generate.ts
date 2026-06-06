/**
 * Unkey SDK Code Generator
 *
 * Uses the shared OpenAPI generator from sdk-core to generate operations
 * from Unkey's OpenAPI 3.1 spec mirrored in specs/distilled-spec-unkey.
 */
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "path";
import { generateFromOpenAPI } from "@distilled.cloud/core/openapi/generate";

const rootDir = path.join(import.meta.dir, "..");
const sourceSpecPath = path.join(
  rootDir,
  "specs/distilled-spec-unkey/specs/openapi.json",
);
const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "distilled-unkey-"));
const specPath = path.join(tempDir, "openapi.json");
const spec = JSON.parse(fs.readFileSync(sourceSpecPath, "utf-8"));

for (const pathItem of Object.values(spec.paths ?? {})) {
  if (!pathItem || typeof pathItem !== "object") continue;
  for (const operation of Object.values(pathItem as Record<string, unknown>)) {
    if (!operation || typeof operation !== "object") continue;
    const candidate = operation as { operationId?: unknown };
    if (typeof candidate.operationId === "string") {
      candidate.operationId = candidate.operationId.replace(/\./g, "_");
    }
  }
}

fs.writeFileSync(specPath, `${JSON.stringify(spec)}\n`);

generateFromOpenAPI({
  specPath,
  patchDir: path.join(rootDir, "patches"),
  outputDir: path.join(rootDir, "src/operations"),
  importPrefix: "..",
  clientImport: "../client",
  traitsImport: "../traits",
  sensitiveImport: "../sensitive",
  errorsImport: "../errors",
  includeOperationErrors: true,
  statusToErrorClass: {
    "400": "BadRequest",
    "403": "Forbidden",
    "404": "NotFound",
    "409": "Conflict",
    "410": "Gone",
    "412": "PreconditionFailed",
    "422": "UnprocessableEntity",
  },
  defaultErrorStatuses: new Set(["401", "429", "500", "502", "503", "504"]),
  skipDeprecated: true,
});
