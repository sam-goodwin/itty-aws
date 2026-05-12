/**
 * Vultr SDK Code Generator
 *
 * Uses the shared OpenAPI generator from sdk-core to generate operations
 * from the Vultr OpenAPI 3.0 spec located in the openapi-vultr submodule.
 *
 * Vultr's spec uses hyphenated path parameter names (e.g. `{baremetal-id}`),
 * which are not valid JavaScript identifiers and confuse the shared generator
 * (it emits unquoted property names). We pre-process the spec to convert all
 * hyphenated path parameter names to camelCase before invoking the generator.
 */
import * as fs from "fs";
import * as path from "path";
import { generateFromOpenAPI } from "@distilled.cloud/core/openapi/generate";

const rootDir = path.join(import.meta.dir, "..");

const sourceSpecPath = path.join(
  rootDir,
  "specs/openapi-vultr/third_party/v2.json",
);
const preprocessedSpecPath = path.join(rootDir, "specs/v2.preprocessed.json");

function toCamel(name: string): string {
  return name.replace(/[-_]+([a-zA-Z0-9])/g, (_, c) => c.toUpperCase());
}

function isValidIdent(name: string): boolean {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name);
}

function normalizeSpec(spec: any): void {
  // 1. Rename shared path parameters in components.parameters.
  const sharedParams = spec.components?.parameters ?? {};
  for (const key of Object.keys(sharedParams)) {
    const param = sharedParams[key];
    if (param?.in === "path" && typeof param.name === "string" && !isValidIdent(param.name)) {
      param.name = toCamel(param.name);
    }
  }

  // 2. For each path: rewrite hyphenated placeholders to camelCase and update
  //    inline parameter names accordingly.
  const paths = spec.paths ?? {};
  const newPaths: Record<string, unknown> = {};
  const methods = ["get", "post", "put", "patch", "delete", "options", "head"];

  for (const pathKey of Object.keys(paths)) {
    const pathItem = paths[pathKey];

    const placeholderRenames = new Map<string, string>();
    const newPathKey = pathKey.replace(/\{([^}]+)\}/g, (_, raw) => {
      if (isValidIdent(raw)) return `{${raw}}`;
      const camel = toCamel(raw);
      placeholderRenames.set(raw, camel);
      return `{${camel}}`;
    });

    if (placeholderRenames.size > 0) {
      const rewriteParam = (param: any) => {
        if (
          param &&
          typeof param === "object" &&
          param.in === "path" &&
          typeof param.name === "string" &&
          placeholderRenames.has(param.name)
        ) {
          param.name = placeholderRenames.get(param.name);
        }
      };
      for (const method of methods) {
        const op = pathItem?.[method];
        if (op?.parameters) {
          for (const param of op.parameters) rewriteParam(param);
        }
      }
      if (pathItem?.parameters) {
        for (const param of pathItem.parameters) rewriteParam(param);
      }
    }

    newPaths[newPathKey] = pathItem;
  }

  spec.paths = newPaths;
}

const raw = fs.readFileSync(sourceSpecPath, "utf-8");
const spec = JSON.parse(raw);
normalizeSpec(spec);
fs.writeFileSync(preprocessedSpecPath, JSON.stringify(spec, null, 2));

generateFromOpenAPI({
  specPath: preprocessedSpecPath,
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
