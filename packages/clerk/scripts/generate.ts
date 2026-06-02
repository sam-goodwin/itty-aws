/**
 * Clerk SDK Code Generator
 *
 * Clerk publishes two distinct OpenAPI specs:
 *   - Platform API  (workspace/application management, "platform_api_access_token" bearer)
 *   - Backend API   (per-instance resources, "bearerAuth" with secret key)
 *
 * Both live at https://api.clerk.com/v1 but require different credentials and
 * have largely disjoint operation sets, so we generate them into separate
 * subdirectories and wire each subdirectory to its own API client instance:
 *
 *   src/operations/platform/*  ->  imports { API } from ../../platform-client
 *   src/operations/backend/*   ->  imports { API } from ../../backend-client
 */
import * as fs from "fs";
import * as path from "path";
import { generateFromOpenAPI } from "@distilled.cloud/core/openapi/generate";

const rootDir = path.join(import.meta.dir, "..");
const specDir = path.join(rootDir, "specs/distilled-spec-clerk/specs");
const patchDir = path.join(rootDir, "patches");
const operationsRoot = path.join(rootDir, "src/operations");

interface SpecConfig {
  name: "platform" | "backend";
  specPath: string;
  clientImport: string;
}

const SPECS: SpecConfig[] = [
  {
    name: "platform",
    specPath: path.join(specDir, "openapi.json"),
    clientImport: "../../platform-client",
  },
  {
    name: "backend",
    specPath: path.join(specDir, "spec-1.json"),
    clientImport: "../../backend-client",
  },
];

// Wipe each subdir so stale files from removed operations don't accumulate.
function resetDir(dir: string) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

for (const spec of SPECS) {
  const outputDir = path.join(operationsRoot, spec.name);
  resetDir(outputDir);

  generateFromOpenAPI({
    specPath: spec.specPath,
    patchDir,
    outputDir,
    importPrefix: "../..",
    clientImport: spec.clientImport,
    traitsImport: "../../traits",
    sensitiveImport: "../../sensitive",
    errorsImport: "../../errors",
    includeOperationErrors: true,
    // Extend the generator's default status->error-class map with the
    // Clerk-specific HTTP codes the spec actually documents but that
    // sdk-core's generic map doesn't cover. Without these, 402/410/413
    // responses would fall through to UnknownClerkError instead of
    // surfacing as PaymentRequired / Gone / PayloadTooLarge.
    statusToErrorClass: {
      "400": "BadRequest",
      "402": "PaymentRequired",
      "403": "Forbidden",
      "404": "NotFound",
      "409": "Conflict",
      "410": "Gone",
      "413": "PayloadTooLarge",
      "422": "UnprocessableEntity",
    },
    skipDeprecated: true,
  });
}

// Top-level barrel re-exports both as namespaces so callers can write either
// `import { Platform, Backend } from "@distilled.cloud/clerk/operations"` or
// reach into a single namespace.
const barrelPath = path.join(operationsRoot, "index.ts");
fs.writeFileSync(
  barrelPath,
  [
    `export * as Platform from "./platform/index.ts";`,
    `export * as Backend from "./backend/index.ts";`,
    "",
  ].join("\n"),
);
