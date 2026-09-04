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

/** REST collection actions that may trail a resource (`ConfigsList`). */
const REST_LAST = new Set([
  "list",
  "create",
  "get",
  "show",
  "delete",
  "update",
  "patch",
]);

const splitIdent = (s: string): string[] => {
  const parts: string[] = [];
  for (const chunk of s.split(/[_/-]+/).filter(Boolean)) {
    const split = chunk
      .replace(/([a-z0-9])([A-Z])/g, "$1\0$2")
      .replace(/([A-Z]+)([A-Z][a-z])/g, "$1\0$2");
    for (const p of split.split("\0")) {
      if (p) parts.push(p);
    }
  }
  return parts;
};

const isVerbToken = (raw: string): boolean => {
  const lower = raw.toLowerCase();
  return (
    VERBS.has(lower) || REST_LAST.has(lower) || VERB_ALIAS[lower] !== undefined
  );
};

/**
 * Distilled SDK names are verbNoun (`listApps`, `getApp`, `createMachine`).
 *
 * - Already verb-first (`listSprites`, `GetObject`, `showContact`) stays,
 *   with `show` → `get`.
 * - Trailing REST action (`ConfigsList`, `PlansGet`, `ContainerCreate`)
 *   moves the verb first. Preceding tokens that are themselves verbs
 *   (`AppGetOrCreate`) are left alone.
 * - go-swagger `Apps_list` / `App_Certificates_show` / `Machines_list_events`
 *   uses the underscore-token verb.
 */
export const toVerbNoun = (operationId: string): string => {
  const parts = splitIdent(operationId);
  if (parts.length === 0) return lowerFirst(operationId);

  const alias = (raw: string): string =>
    VERB_ALIAS[raw.toLowerCase()] ?? raw.toLowerCase();

  if (isVerbToken(parts[0]!)) {
    return alias(parts[0]!) + parts.slice(1).map(pascalToken).join("");
  }

  // `AppGetOrCreate` and similar compounds: more than one verb → leave it.
  if (parts.filter(isVerbToken).length > 1) {
    return lowerFirst(operationId);
  }

  const last = parts.at(-1)!;
  const precedingHasVerb = parts.slice(0, -1).some(isVerbToken);
  if (REST_LAST.has(last.toLowerCase()) && !precedingHasVerb) {
    const verb = alias(last);
    const nouns = parts.slice(0, -1);
    const shaped = nouns.map((p, i) => {
      const isLast = i === nouns.length - 1;
      if (verb === "list" && isLast) return pascalToken(p);
      return pascalToken(singularize(p));
    });
    return verb + shaped.join("");
  }

  let verbIndex = -1;
  if (VERBS.has(last.toLowerCase()) && !precedingHasVerb) {
    verbIndex = parts.length - 1;
  } else {
    for (let i = 0; i < parts.length; i++) {
      if (VERBS.has(parts[i]!.toLowerCase())) {
        verbIndex = i;
        break;
      }
    }
  }
  if (verbIndex < 0) return lowerFirst(operationId);

  const verb = alias(parts[verbIndex]!);
  let nouns = [...parts.slice(0, verbIndex), ...parts.slice(verbIndex + 1)];

  const orgAt = nouns.findIndex(
    (p) => p.toLowerCase() === "org" || p.toLowerCase() === "orgs",
  );
  if (orgAt >= 0) {
    const [org] = nouns.splice(orgAt, 1);
    nouns = [org!, ...nouns];
  }

  const shaped = nouns.map((p, i) => {
    const isLast = i === nouns.length - 1;
    if (verb === "list" && isLast) return pascalToken(p);
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

const COMPANION_SUFFIXES = [
  "Request",
  "Response",
  "Input",
  "Output",
  "Error",
  "Result",
] as const;

const remapTargets = (
  node: unknown,
  mapping: ReadonlyMap<string, string>,
): unknown => {
  if (Array.isArray(node)) {
    return node.map((item) => remapTargets(item, mapping));
  }
  if (node === null || typeof node !== "object") return node;
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
    if (key === "target" && typeof value === "string") {
      out[key] = mapping.get(value) ?? value;
    } else {
      out[key] = remapTargets(value, mapping);
    }
  }
  return out;
};

/**
 * Rename operation (and `*Request`/`*Response` companions) in a Smithy
 * model to verbNoun PascalCase. Mutates `model.shapes`. Colliding names
 * keep the original id.
 */
export const verbNounSmithyModel = (model: {
  shapes?: Record<string, any>;
}): { renamed: number; collisions: string[] } => {
  const shapes = model.shapes ?? {};
  const mapping = new Map<string, string>();
  const collisions: string[] = [];

  const ops = Object.entries(shapes).filter(
    ([, def]) => def?.type === "operation",
  );
  for (const [id, _def] of ops) {
    const hash = id.indexOf("#");
    const ns = hash >= 0 ? id.slice(0, hash) : "";
    const local = hash >= 0 ? id.slice(hash + 1) : id;
    const camel = toVerbNoun(local);
    const nextLocal = camel.charAt(0).toUpperCase() + camel.slice(1);
    if (nextLocal === local) continue;
    const nextId = ns ? `${ns}#${nextLocal}` : nextLocal;
    if (
      shapes[nextId] !== undefined ||
      [...mapping.values()].includes(nextId)
    ) {
      collisions.push(`${local} → ${nextLocal}`);
      continue;
    }
    mapping.set(id, nextId);
    for (const suffix of COMPANION_SUFFIXES) {
      const from = ns ? `${ns}#${local}${suffix}` : `${local}${suffix}`;
      const to = ns ? `${ns}#${nextLocal}${suffix}` : `${nextLocal}${suffix}`;
      if (shapes[from] !== undefined && shapes[to] === undefined) {
        mapping.set(from, to);
      }
    }
  }

  if (mapping.size === 0) return { renamed: 0, collisions };

  const nextShapes: Record<string, any> = {};
  for (const [id, def] of Object.entries(shapes)) {
    const newId = mapping.get(id) ?? id;
    nextShapes[newId] = remapTargets(def, mapping);
  }
  model.shapes = nextShapes;
  return {
    renamed: [...mapping.keys()].filter((id) =>
      ops.some(([opId]) => opId === id),
    ).length,
    collisions,
  };
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
