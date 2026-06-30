import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1ActivateVanitySubdomainConfigInput {
  ref: string;
  vanity_subdomain: string;
}
export const V1ActivateVanitySubdomainConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    vanity_subdomain: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/projects/{ref}/vanity-subdomain/activate",
    }),
  ) as unknown as Schema.Codec<V1ActivateVanitySubdomainConfigInput>;

// Output Schema
export interface V1ActivateVanitySubdomainConfigOutput {
  custom_domain: string;
}
export const V1ActivateVanitySubdomainConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    custom_domain: Schema.String,
  }) as unknown as Schema.Codec<V1ActivateVanitySubdomainConfigOutput>;

// The operation
/**
 * [Beta] Activates a vanity subdomain for a project.
 *
 * @param ref - Project ref
 */
export const v1ActivateVanitySubdomainConfig =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: V1ActivateVanitySubdomainConfigInput,
    outputSchema: V1ActivateVanitySubdomainConfigOutput,
    errors: [BadRequest, Forbidden] as const,
  }));
