import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1ClaimProjectForOrganizationInput {
  slug: string;
  token: string;
}
export const V1ClaimProjectForOrganizationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
    token: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/organizations/{slug}/project-claim/{token}",
    }),
  ) as unknown as Schema.Codec<V1ClaimProjectForOrganizationInput>;

// Output Schema
export type V1ClaimProjectForOrganizationOutput = void;
export const V1ClaimProjectForOrganizationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<V1ClaimProjectForOrganizationOutput>;

// The operation
/**
 * Claims project for the specified organization
 *
 * @param slug - Organization slug
 */
export const v1ClaimProjectForOrganization =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: V1ClaimProjectForOrganizationInput,
    outputSchema: V1ClaimProjectForOrganizationOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
