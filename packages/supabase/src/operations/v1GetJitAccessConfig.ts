import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetJitAccessConfigInput {
  ref: string;
}
export const V1GetJitAccessConfigInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/jit-access" }),
  ) as unknown as Schema.Codec<V1GetJitAccessConfigInput>;

// Output Schema
export type V1GetJitAccessConfigOutput =
  | { state: "enabled" | "disabled"; appliedSuccessfully?: boolean }
  | {
      state: "unavailable";
      unavailableReason:
        | "postgres_upgrade_required"
        | "temporarily_unavailable";
    };
export const V1GetJitAccessConfigOutput =
  /*@__PURE__*/ Schema.Union([
    Schema.Struct({
      state: Schema.Literals(["enabled", "disabled"]),
      appliedSuccessfully: Schema.optional(Schema.Boolean),
    }),
    Schema.Struct({
      state: Schema.Literals(["unavailable"]),
      unavailableReason: Schema.Literals([
        "postgres_upgrade_required",
        "temporarily_unavailable",
      ]),
    }),
  ]) as unknown as Schema.Codec<V1GetJitAccessConfigOutput>;

// The operation
/**
 * [Beta] Get project's temporary access configuration.
 *
 * @param ref - Project ref
 */
export const v1GetJitAccessConfig = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1GetJitAccessConfigInput,
  outputSchema: V1GetJitAccessConfigOutput,
  errors: [BadRequest, Forbidden] as const,
}));
