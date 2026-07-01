import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1CreateAnOrganizationInput {
  name: string;
}
export const V1CreateAnOrganizationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/v1/organizations" }),
  ) as unknown as Schema.Codec<V1CreateAnOrganizationInput>;

// Output Schema
export interface V1CreateAnOrganizationOutput {
  id: string;
  slug: string;
  name: string;
}
export const V1CreateAnOrganizationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    slug: Schema.String,
    name: Schema.String,
  }) as unknown as Schema.Codec<V1CreateAnOrganizationOutput>;

// The operation
/**
 * Create an organization
 */
export const v1CreateAnOrganization = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1CreateAnOrganizationInput,
    outputSchema: V1CreateAnOrganizationOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
