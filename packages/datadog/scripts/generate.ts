#!/usr/bin/env bun
/**
 * generate — turn the Smithy JSON models in .generated-specs into the Datadog
 * Effect SDK.
 *
 * Input:  .generated-specs/<tag>.json  (one model per allowlisted Datadog
 *         tag, written by scripts/convert.ts)
 * Output: src/services/<tag>.ts  +  src/services/index.ts
 *
 * The smithy→SDK compiler and CLI pipeline live in
 * `@distilled.cloud/core/codegen`; this script is Datadog's provider spec.
 *
 * Datadog keeps its wire member names verbatim (snake_case) on the TS
 * surface. Module files are named after the tag slug
 * (`service_level_objectives.ts`) while the barrel exports them camelCased
 * (`Services.serviceLevelObjectives.getSLO`).
 *
 * No pagination profiles are emitted: the generated v1 list endpoints
 * paginate with plain `page`/`page_size` (monitors) or `limit`/`offset`
 * (SLOs) query params and no in-body next-page token — callers advance them.
 */
import { type SdkSpec } from "@distilled.cloud/core/codegen/generator";
import { runGeneratorCli } from "@distilled.cloud/core/codegen/cli";

const NULLABLE_TRAIT = "com.distilled.openapi#nullable";
const ERROR_MATCHERS_TRAIT = "com.distilled.openapi#errorMatchers";
const RAW_RESPONSE_TRAIT = "com.distilled.openapi#rawResponse";
const SENSITIVE_TRAIT = "smithy.api#sensitive";

/** `service_level_objectives` → `serviceLevelObjectives` (the barrel's export name). */
const camel = (slug: string): string =>
  slug
    .split("_")
    .filter(Boolean)
    .map((s, i) => (i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)))
    .join("");

/** Datadog's provider spec for the shared smithy→SDK compiler. */
const spec: SdkSpec = {
  // Wire names ARE the TS surface (snake_case) — no renaming.
  nullableTrait: NULLABLE_TRAIT,
  errorMatchersTrait: ERROR_MATCHERS_TRAIT,

  extraBindings: [
    {
      // Sole member of a synthesized wrapper for bare array/scalar response
      // bodies; as the response's only member, the response IS the payload.
      trait: RAW_RESPONSE_TRAIT,
      binding: "rawResponse",
      pipe: "T.RawResponse()",
      rootPipe: "T.RawResponseRoot()",
    },
  ],

  // Sensitive strings (API/application key values): Redacted on the way out,
  // `string | Redacted` accepted on the way in (the REST protocol unwraps).
  memberTraitPipes: {
    [SENSITIVE_TRAIT]: "T.SensitiveValue",
  },
  memberTsType: (m) =>
    SENSITIVE_TRAIT in m.traits
      ? `string | Redacted.Redacted<string>${m.nullable ? " | null" : ""}`
      : undefined,

  // Datadog's oneOf unions (monitor `restricted_roles | null` alternates,
  // SLO data-source query variants) are decoded passthrough: the TS type is
  // the case union, the schema stays opaque — the API returns one arm's
  // plain value, so no runtime case discrimination is needed.
  union: ({ name, caseTargets, tsRef }) => [
    `export type ${name} = ${caseTargets.map(tsRef).join(" | ") || "unknown"};`,
    `export const ${name} = /*@__PURE__*/ S.Unknown as any as S.Schema<${name}>;\n`,
  ],

  sourceNote:
    ".generated-specs (specs/datadog-api-client-typescript .generator/schemas/v1)",

  operationDecl: {
    contextType: "DatadogOpContext",
    commonErrorType: "DatadogOpError",
    // Per-op error lists carry exactly the statuses the spec declares
    // (400/403/404/409); 401/429/500/503 ride DatadogOpError.
    commonErrorClasses: [],
    protocol: "DatadogProtocol",
    retry: "Retry.Retry",
  },

  // `effect/Redacted` is only referenced by modules with sensitive members —
  // import it exactly there. With commonErrorClasses empty the default
  // header's `import { } from "../errors.ts"` is dead weight — drop it.
  postProcess: (code) => {
    let out = code.replace(/import \{\s*\} from "\.\.\/errors\.ts";\n/, "");
    if (out.includes("Redacted.Redacted<")) {
      out = out.replace(
        `import * as S from "@distilled.cloud/core/schema";`,
        `import * as S from "@distilled.cloud/core/schema";\nimport * as Redacted from "effect/Redacted";`,
      );
    }
    return out;
  },
};

runGeneratorCli({
  description: "Generate the Datadog Effect SDK from the Smithy models",
  root: `${import.meta.dir}/..`,
  // The RFC-6902 patch chain in patches/ applies to the OpenAPI document in
  // scripts/convert.ts — never to the Smithy models.
  patchesDir: false,
  barrelExportName: camel,
  spec: () => spec,
});
