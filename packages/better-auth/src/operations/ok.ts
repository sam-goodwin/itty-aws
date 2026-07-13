import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface OkInput {}
export const OkInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/ok" }),
) as unknown as Schema.Codec<OkInput>;

// Output Schema
export interface OkOutput {
  ok: boolean;
}
export const OkOutput = /*@__PURE__*/ Schema.Struct({
  ok: Schema.Boolean,
}) as unknown as Schema.Codec<OkOutput>;

/**
 * Liveness check.
 *
 * Public endpoint. Returns `{ ok: true }` when the auth handler is reachable.
 */
export const ok = /*@__PURE__*/ API.make(() => ({
  inputSchema: OkInput,
  outputSchema: OkOutput,
}));
