import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1UpdateJitAccessConfigInput {
  ref: string;
  state: "enabled" | "disabled";
}
export const V1UpdateJitAccessConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    state: Schema.Literals(["enabled", "disabled"]),
  }).pipe(
    T.Http({ method: "PUT", path: "/v1/projects/{ref}/jit-access" }),
  ) as unknown as Schema.Codec<V1UpdateJitAccessConfigInput>;

// Output Schema
export type V1UpdateJitAccessConfigOutput =
  | { state: "enabled" | "disabled"; appliedSuccessfully?: boolean }
  | {
      state: "unavailable";
      unavailableReason:
        | "postgres_upgrade_required"
        | "temporarily_unavailable";
    };
export const V1UpdateJitAccessConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
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
  ]) as unknown as Schema.Codec<V1UpdateJitAccessConfigOutput>;

// The operation
/**
 * [Beta] Update project's temporary access configuration.
 *
 * @param ref - Project ref
 */
export const v1UpdateJitAccessConfig = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1UpdateJitAccessConfigInput,
    outputSchema: V1UpdateJitAccessConfigOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
