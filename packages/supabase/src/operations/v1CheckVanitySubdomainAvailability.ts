import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1CheckVanitySubdomainAvailabilityInput {
  ref: string;
  vanity_subdomain: string;
}
export const V1CheckVanitySubdomainAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    vanity_subdomain: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/projects/{ref}/vanity-subdomain/check-availability",
    }),
  ) as unknown as Schema.Codec<V1CheckVanitySubdomainAvailabilityInput>;

// Output Schema
export interface V1CheckVanitySubdomainAvailabilityOutput {
  available: boolean;
}
export const V1CheckVanitySubdomainAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    available: Schema.Boolean,
  }) as unknown as Schema.Codec<V1CheckVanitySubdomainAvailabilityOutput>;

// The operation
/**
 * [Beta] Checks vanity subdomain availability
 *
 * @param ref - Project ref
 */
export const v1CheckVanitySubdomainAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: V1CheckVanitySubdomainAvailabilityInput,
    outputSchema: V1CheckVanitySubdomainAvailabilityOutput,
    errors: [BadRequest, Forbidden] as const,
  }));
