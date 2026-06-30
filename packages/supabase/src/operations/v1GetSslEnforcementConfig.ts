import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetSslEnforcementConfigInput {
  ref: string;
}
export const V1GetSslEnforcementConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/ssl-enforcement" }),
  ) as unknown as Schema.Codec<V1GetSslEnforcementConfigInput>;

// Output Schema
export interface V1GetSslEnforcementConfigOutput {
  currentConfig: { database: boolean };
  appliedSuccessfully: boolean;
}
export const V1GetSslEnforcementConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentConfig: Schema.Struct({
      database: Schema.Boolean,
    }),
    appliedSuccessfully: Schema.Boolean,
  }) as unknown as Schema.Codec<V1GetSslEnforcementConfigOutput>;

// The operation
/**
 * [Beta] Get project's SSL enforcement configuration.
 *
 * @param ref - Project ref
 */
export const v1GetSslEnforcementConfig = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1GetSslEnforcementConfigInput,
    outputSchema: V1GetSslEnforcementConfigOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
