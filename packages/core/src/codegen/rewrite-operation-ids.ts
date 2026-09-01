/**
 * OpenAPI operation naming (dev-time only).
 *
 * RFC-6902 patches that target `/paths/~1foo/get/operationId` break the
 * moment upstream prefixes paths (`/foo` → `/v1/foo`). Naming is a convert
 * policy (`operationNaming: "verbNoun"`), not a spec patch.
 *
 * `rewriteOpenApiOperationIds` still exists for the rare case a later step
 * reads the OpenAPI `operationId`; prefer {@link toVerbNoun} at convert time.
 */
export interface OperationIdContext {
  readonly path: string;
  readonly method: string;
}

/**
 * Return the new operation name, or `undefined` to leave the current value.
 * A `Record` is looked up by `"METHOD path"` first, then the spec's
 * `operationId` — same id on PUT vs PATCH needs the path key.
 */
export type OperationIdRewrite =
  | Readonly<Record<string, string>>
  | ((operationId: string, ctx: OperationIdContext) => string | undefined);

const HTTP_METHODS = [
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "head",
  "options",
] as const;

/** `show` (go-swagger) → `get`; `index` → `list`. */
const VERB_ALIAS: Readonly<Record<string, string>> = {
  show: "get",
  index: "list",
};

/**
 * Action tokens pulled out of go-swagger `Resource_action` ids. Trailing
 * HTTP methods (`get`/`post`/`put`/`patch` as the last `_` segment of
 * `Platform_regions_get`) are not verbs — those stay for {@link operationNames}.
 */
const VERBS = new Set([
  "list",
  "create",
  "show",
  "get",
  "delete",
  "update",
  "check",
  "set",
  "cordon",
  "uncordon",
  "exec",
  "reclaim",
  "upsert",
  "restart",
  "signal",
  "start",
  "stop",
  "suspend",
  "wait",
  "decrypt",
  "encrypt",
  "generate",
  "sign",
  "verify",
  "extend",
  "authenticate",
  "authorize",
  "request",
  "enable",
  "disable",
  "fork",
  "restore",
  "release",
  "rotate",
]);

/** Compound tokens the naive split would leave as `Secretkeys`. */
const TOKEN_ALIAS: Readonly<Record<string, string>> = {
  secretkeys: "SecretKeys",
  secretkey: "SecretKey",
};

const IRREGULAR_SINGULAR: Readonly<Record<string, string>> = {
  processes: "process",
  statuses: "status",
};

/** Product names that happen to end in `s` (Postgres, …). */
const UNCOUNTABLE = new Set(["postgres"]);

/** Certificate variants that sit in front of the resource noun. */
const QUALIFIERS = new Set(["acme", "custom"]);

export const operationNameKey = (ctx: OperationIdContext): string =>
  `${ctx.method.toUpperCase()} ${ctx.path}`;

/** Resolve {@link OperationIdRewrite} against method+path, then operationId. */
export const resolveOperationName = (
  rewrite: OperationIdRewrite,
  operationId: string,
  ctx: OperationIdContext,
): string | undefined => {
  if (typeof rewrite === "function") return rewrite(operationId, ctx);
  return rewrite[operationNameKey(ctx)] ?? rewrite[operationId];
};

const pascalToken = (raw: string): string => {
  const alias = TOKEN_ALIAS[raw.toLowerCase()];
  if (alias !== undefined) return alias;
  if (raw.length > 1 && raw === raw.toUpperCase() && /[A-Z]/.test(raw)) {
    return raw.charAt(0) + raw.slice(1).toLowerCase();
  }
  return raw.charAt(0).toUpperCase() + raw.slice(1);
};

const singularize = (raw: string): string => {
  const lower = raw.toLowerCase();
  const alias = TOKEN_ALIAS[lower];
  if (alias !== undefined) {
    return alias.endsWith("s") ? alias.slice(0, -1) : alias;
  }
  const irregular = IRREGULAR_SINGULAR[lower];
  if (irregular !== undefined) {
    return raw[0] === raw[0]?.toUpperCase()
      ? irregular.charAt(0).toUpperCase() + irregular.slice(1)
      : irregular;
  }
  if (UNCOUNTABLE.has(lower)) return raw;
  if (lower.length <= 3) return raw;
  if (/(?:ss|us|is|os)$/i.test(raw)) return raw;
  if (/ies$/i.test(raw) && raw.length > 4) {
    return `${raw.slice(0, -3)}y`;
  }
  if (lower.endsWith("s")) return raw.slice(0, -1);
  return raw;
};

const lowerFirst = (s: string): string =>
  s.length === 0 ? s : s.charAt(0).toLowerCase() + s.slice(1);

/**
 * go-swagger `Apps_list` / `App_Certificates_show` → distilled `listApps` /
 * `getAppCertificate`. Already-camelCase ids (`listSprites`,
 * `createVolumeSnapshot`) are unchanged. `show` becomes `get`.
 *
 * Not 100% of upstream nicknames: collection-wide updates, HTTP-method
 * suffixes, and a few token orders need {@link OpenApiConvertOptions.operationNames}.
 */
export const toVerbNoun = (operationId: string): string => {
  if (!operationId.includes("_")) {
    return lowerFirst(operationId);
  }
  const parts = operationId.split("_").filter(Boolean);
  let verbIndex = -1;
  if (VERBS.has(parts.at(-1)!.toLowerCase())) {
    verbIndex = parts.length - 1;
  } else {
    for (let i = 0; i < parts.length; i++) {
      if (VERBS.has(parts[i]!.toLowerCase())) {
        verbIndex = i;
        break;
      }
    }
  }
  if (verbIndex < 0) {
    return lowerFirst(
      parts.map((p, i) => (i === 0 ? p : pascalToken(p))).join(""),
    );
  }
  const rawVerb = parts[verbIndex]!.toLowerCase();
  const verb = VERB_ALIAS[rawVerb] ?? rawVerb;
  let nouns = [...parts.slice(0, verbIndex), ...parts.slice(verbIndex + 1)];

  const orgAt = nouns.findIndex(
    (p) => p.toLowerCase() === "org" || p.toLowerCase() === "orgs",
  );
  if (orgAt >= 0) {
    const [org] = nouns.splice(orgAt, 1);
    nouns = [org!, ...nouns];
  }

  const shaped = nouns.map((p, i) => {
    const last = i === nouns.length - 1;
    if (verb === "list" && last) return pascalToken(p);
    return pascalToken(singularize(p));
  });

  if (shaped.length >= 2) {
    const lastRaw = nouns.at(-1)!.toLowerCase();
    if (QUALIFIERS.has(lastRaw)) {
      const q = shaped.pop()!;
      const resource = shaped.pop()!;
      shaped.push(q, resource);
    }
  }

  return verb + shaped.join("");
};

/** Apply {@link rewrite} to every operation in `spec.paths`. Mutates in place. */
export const rewriteOpenApiOperationIds = (
  spec: { paths?: Record<string, unknown> },
  rewrite: OperationIdRewrite,
): { renamed: number } => {
  let renamed = 0;
  for (const [path, item] of Object.entries(spec.paths ?? {})) {
    if (item === null || typeof item !== "object" || Array.isArray(item)) {
      continue;
    }
    const record = item as Record<string, unknown>;
    for (const method of HTTP_METHODS) {
      const op = record[method];
      if (op === null || typeof op !== "object" || Array.isArray(op)) continue;
      const body = op as Record<string, unknown>;
      const current = body.operationId;
      if (typeof current !== "string" || current === "") continue;
      const next = resolveOperationName(rewrite, current, { path, method });
      if (next !== undefined && next !== current) {
        body.operationId = next;
        renamed++;
      }
    }
  }
  return { renamed };
};
