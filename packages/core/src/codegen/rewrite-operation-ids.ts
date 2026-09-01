/**
 * Path-independent OpenAPI operationId rewriting (dev-time only).
 *
 * RFC-6902 patches that target `/paths/~1foo/get/operationId` break the
 * moment upstream prefixes paths (`/foo` → `/v1/foo`) — every rename is
 * silently skipped as a stale pointer. Rewriting by the spec's current
 * `operationId` (and optionally method + path) does not depend on the
 * JSON-pointer encoding of the URL.
 */
export interface OperationIdContext {
  readonly path: string;
  readonly method: string;
}

/**
 * Return the new operationId, or `undefined` to leave the spec value
 * unchanged. A `Record` is looked up by the spec's current operationId.
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

/** Apply {@link rewrite} to every operation in `spec.paths`. Mutates in place. */
export const rewriteOpenApiOperationIds = (
  spec: { paths?: Record<string, unknown> },
  rewrite: OperationIdRewrite,
): { renamed: number } => {
  const lookup =
    typeof rewrite === "function" ? rewrite : (id: string) => rewrite[id];
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
      const next = lookup(current, { path, method });
      if (next !== undefined && next !== current) {
        body.operationId = next;
        renamed++;
      }
    }
  }
  return { renamed };
};
