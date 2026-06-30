import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetProjectLegacyApiKeysInput {
  ref: string;
}
export const V1GetProjectLegacyApiKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/api-keys/legacy" }),
  ) as unknown as Schema.Codec<V1GetProjectLegacyApiKeysInput>;

// Output Schema
export interface V1GetProjectLegacyApiKeysOutput {
  enabled: boolean;
}
export const V1GetProjectLegacyApiKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
  }) as unknown as Schema.Codec<V1GetProjectLegacyApiKeysOutput>;

// The operation
/**
 * Check whether JWT based legacy (anon, service_role) API keys are enabled. This API endpoint will be removed in the future, check for HTTP 404 Not Found.
 *
 * @param ref - Project ref
 */
export const v1GetProjectLegacyApiKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1GetProjectLegacyApiKeysInput,
    outputSchema: V1GetProjectLegacyApiKeysOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
