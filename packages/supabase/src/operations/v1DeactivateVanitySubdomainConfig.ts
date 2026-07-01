import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1DeactivateVanitySubdomainConfigInput {
  ref: string;
}
export const V1DeactivateVanitySubdomainConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/projects/{ref}/vanity-subdomain" }),
  ) as unknown as Schema.Codec<V1DeactivateVanitySubdomainConfigInput>;

// Output Schema
export type V1DeactivateVanitySubdomainConfigOutput = void;
export const V1DeactivateVanitySubdomainConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<V1DeactivateVanitySubdomainConfigOutput>;

// The operation
/**
 * [Beta] Deletes a project's vanity subdomain configuration
 *
 * @param ref - Project ref
 */
export const v1DeactivateVanitySubdomainConfig =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: V1DeactivateVanitySubdomainConfigInput,
    outputSchema: V1DeactivateVanitySubdomainConfigOutput,
    errors: [BadRequest, Forbidden] as const,
  }));
