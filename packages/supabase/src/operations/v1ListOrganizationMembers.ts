import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1ListOrganizationMembersInput {
  slug: string;
}
export const V1ListOrganizationMembersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/organizations/{slug}/members" }),
  ) as unknown as Schema.Codec<V1ListOrganizationMembersInput>;

// Output Schema
export type V1ListOrganizationMembersOutput = {
  user_id: string;
  user_name: string;
  email?: string;
  role_name: string;
  mfa_enabled: boolean;
  avatar_url: string | null;
}[];
export const V1ListOrganizationMembersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      user_id: Schema.String,
      user_name: Schema.String,
      email: Schema.optional(Schema.String),
      role_name: Schema.String,
      mfa_enabled: Schema.Boolean,
      avatar_url: Schema.NullOr(Schema.String),
    }),
  ) as unknown as Schema.Codec<V1ListOrganizationMembersOutput>;

// The operation
/**
 * List members of an organization
 *
 * @param slug - Organization slug
 */
export const v1ListOrganizationMembers = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1ListOrganizationMembersInput,
    outputSchema: V1ListOrganizationMembersOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
