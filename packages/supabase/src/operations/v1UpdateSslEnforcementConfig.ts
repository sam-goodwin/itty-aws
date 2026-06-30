import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1UpdateSslEnforcementConfigInput {
  ref: string;
  requestedConfig: { database: boolean };
}
export const V1UpdateSslEnforcementConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    requestedConfig: Schema.Struct({
      database: Schema.Boolean,
    }),
  }).pipe(
    T.Http({ method: "PUT", path: "/v1/projects/{ref}/ssl-enforcement" }),
  ) as unknown as Schema.Codec<V1UpdateSslEnforcementConfigInput>;

// Output Schema
export interface V1UpdateSslEnforcementConfigOutput {
  currentConfig: { database: boolean };
  appliedSuccessfully: boolean;
}
export const V1UpdateSslEnforcementConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentConfig: Schema.Struct({
      database: Schema.Boolean,
    }),
    appliedSuccessfully: Schema.Boolean,
  }) as unknown as Schema.Codec<V1UpdateSslEnforcementConfigOutput>;

// The operation
/**
 * [Beta] Update project's SSL enforcement configuration.
 *
 * @param ref - Project ref
 */
export const v1UpdateSslEnforcementConfig =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: V1UpdateSslEnforcementConfigInput,
    outputSchema: V1UpdateSslEnforcementConfigOutput,
    errors: [BadRequest, Forbidden] as const,
  }));
