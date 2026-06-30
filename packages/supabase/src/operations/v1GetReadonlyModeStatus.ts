import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetReadonlyModeStatusInput {
  ref: string;
}
export const V1GetReadonlyModeStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/readonly" }),
  ) as unknown as Schema.Codec<V1GetReadonlyModeStatusInput>;

// Output Schema
export interface V1GetReadonlyModeStatusOutput {
  enabled: boolean;
  override_enabled: boolean;
  override_active_until: string;
}
export const V1GetReadonlyModeStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    override_enabled: Schema.Boolean,
    override_active_until: Schema.String,
  }) as unknown as Schema.Codec<V1GetReadonlyModeStatusOutput>;

// The operation
/**
 * Returns project's readonly mode status
 *
 * @param ref - Project ref
 */
export const v1GetReadonlyModeStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1GetReadonlyModeStatusInput,
    outputSchema: V1GetReadonlyModeStatusOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
