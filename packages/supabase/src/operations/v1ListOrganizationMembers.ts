import * as Schema from "effect/Schema";
import { V1OrganizationMemberResponseSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const V1ListOrganizationMembersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/v1/organizations/{slug}/members" }));
export type V1ListOrganizationMembersInput =
  typeof V1ListOrganizationMembersInput.Type;

// Output Schema
export const V1ListOrganizationMembersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => V1OrganizationMemberResponseSchema),
  );
export type V1ListOrganizationMembersOutput =
  typeof V1ListOrganizationMembersOutput.Type;

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
