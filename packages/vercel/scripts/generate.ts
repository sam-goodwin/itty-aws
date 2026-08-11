#!/usr/bin/env bun
/**
 * generate — turn the Smithy JSON models in .generated-specs into the Vercel
 * Effect SDK.
 *
 * Input:  .generated-specs/<group>.json  (one model per sidebar group, written
 *                                         by scripts/convert.ts)
 *         smithy-patches/<group>/*.json  (RFC-6902 patches to the MODELS —
 *                                         for what OpenAPI can't express)
 * Output: src/services/<group>.ts  +  src/services/index.ts
 *
 * The smithy→SDK compiler and CLI pipeline live in
 * `@distilled.cloud/core/codegen`; this script is Vercel's provider spec: the
 * `com.distilled.openapi` trait vocabulary (nullable members, bare-body
 * responses, error status matchers, sensitive strings), a passthrough union
 * style, and the protocol/retry/error names.
 *
 * Vercel's wire member names are already camelCase (`idOrName`, `createdAt`,
 * `projectsCount`), so they carry to the TS surface verbatim. Module files are
 * named after the group slug (`access_groups.ts`) while the barrel exports
 * them camelCased: `Services.accessGroups.readsAnAccessGroup`.
 *
 * ─── Why there are no pagination profiles ───────────────────────────────────
 * Vercel's list endpoints answer with `{ <items>: [...], pagination: { count,
 * next, prev } }`, where `next` is a TIMESTAMP to feed back as the next
 * request's upper bound. Which input parameter takes it is not consistent —
 * `until` on deployments, `from`/`to` elsewhere, `since`/`until` on others —
 * and the docs never state the pairing. Rather than guess a cursor mapping
 * per endpoint and ship paginators that silently loop or stop early, the
 * pagination fields stay plain input/output members and callers advance them.
 */
import { type SdkSpec } from "@distilled.cloud/core/codegen/generator";
import { runGeneratorCli } from "@distilled.cloud/core/codegen/cli";

const NULLABLE_TRAIT = "com.distilled.openapi#nullable";
const ERROR_MATCHERS_TRAIT = "com.distilled.openapi#errorMatchers";
const RAW_RESPONSE_TRAIT = "com.distilled.openapi#rawResponse";
const SENSITIVE_TRAIT = "smithy.api#sensitive";

/** `access_groups` → `accessGroups` (the barrel's export name). */
const camel = (slug: string): string =>
  slug
    .split("_")
    .filter(Boolean)
    .map((s, i) => (i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)))
    .join("");

/** Vercel's provider spec for the shared smithy→SDK compiler. */
const spec: SdkSpec = {
  // Wire names ARE the TS surface (Vercel's JSON is already camelCase).
  nullableTrait: NULLABLE_TRAIT,
  errorMatchersTrait: ERROR_MATCHERS_TRAIT,

  extraBindings: [
    {
      // Sole member of a synthesized wrapper for bare array/scalar response
      // bodies: as a response's sole member, the response IS the payload.
      trait: RAW_RESPONSE_TRAIT,
      binding: "rawResponse",
      pipe: "T.RawResponse()",
      rootPipe: "T.RawResponseRoot()",
    },
  ],

  // Sensitive strings (tokens, client secrets, OIDC keys): Redacted on the
  // way out, `string | Redacted` accepted on the way in (the REST protocol
  // unwraps).
  memberTraitPipes: {
    [SENSITIVE_TRAIT]: "T.SensitiveValue",
  },
  memberTsType: (m) => {
    if (SENSITIVE_TRAIT in m.traits) {
      return `string | Redacted.Redacted<string>${m.nullable ? " | null" : ""}`;
    }
    // Whole-body binary uploads (cache artifacts, deployment files, project
    // avatars — see smithy-patches/). The prelude types a Blob as `string`;
    // these take real bytes, and the protocol sends every one of these forms
    // verbatim under the operation's `bodyMediaType`.
    if (m.target === "smithy.api#Blob" && m.binding === "rawBody") {
      return "Blob | Uint8Array | ArrayBuffer | string";
    }
    return undefined;
  },

  // Vercel's docs inline a fully dereferenced JSON Schema per body, so its
  // oneOf/anyOf arms arrive as real alternates (a deployment's `creator`, an
  // env var's `target`, a project's framework settings). They decode
  // passthrough: the TS type is the case union, the schema stays opaque —
  // the API returns one arm's plain value, not an all-keys-with-nulls merge,
  // so no runtime case discrimination is needed.
  union: ({ name, caseTargets, tsRef }) => [
    `export type ${name} = ${caseTargets.map(tsRef).join(" | ") || "unknown"};`,
    `export const ${name} = /*@__PURE__*/ S.Unknown as any as S.Schema<${name}>;\n`,
  ],

  sourceNote: ".generated-specs (specs — the vercel.com/docs/rest-api mirror)",

  operationDecl: {
    contextType: "VercelOpContext",
    commonErrorType: "VercelOpError",
    // Vercel documents every failure status per endpoint, so the per-op error
    // lists are already complete; only 401/429/5xx ride VercelOpError.
    commonErrorClasses: [],
    protocol: "VercelProtocol",
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
  description: "Generate the Vercel Effect SDK from the Smithy models",
  root: `${import.meta.dir}/..`,
  // Two patch chains, deliberately separate: `patches/` targets the OpenAPI
  // documents (applied in scripts/convert.ts), `smithy-patches/` targets the
  // Smithy models — for what OpenAPI has no way to say, like the
  // `bodyMediaType` on a raw binary upload.
  patchesDir: "smithy-patches",
  barrelExportName: camel,
  spec: () => spec,
});
