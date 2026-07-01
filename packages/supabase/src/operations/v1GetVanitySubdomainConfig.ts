import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetVanitySubdomainConfigInput {
  ref: string;
}
export const V1GetVanitySubdomainConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/vanity-subdomain" }),
  ) as unknown as Schema.Codec<V1GetVanitySubdomainConfigInput>;

// Output Schema
export interface V1GetVanitySubdomainConfigOutput {
  status: "not-used" | "custom-domain-used" | "active";
  custom_domain?: string;
}
export const V1GetVanitySubdomainConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.Literals(["not-used", "custom-domain-used", "active"]),
    custom_domain: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<V1GetVanitySubdomainConfigOutput>;

// The operation
/**
 * [Beta] Gets current vanity subdomain config
 *
 * @param ref - Project ref
 */
export const v1GetVanitySubdomainConfig = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1GetVanitySubdomainConfigInput,
    outputSchema: V1GetVanitySubdomainConfigOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
