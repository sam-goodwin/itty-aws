import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListOrgResourcePoliciesInput {
  orgId: string;
  envelope?: boolean;
  pretty?: boolean;
}
export const ListOrgResourcePoliciesInput =
  /*@__PURE__*/ Schema.Struct({
    orgId: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    pretty: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/atlas/v2/orgs/{orgId}/resourcePolicies",
    }),
  ) as unknown as Schema.Codec<ListOrgResourcePoliciesInput>;

// Output Schema
export type ListOrgResourcePoliciesOutput = void;
export const ListOrgResourcePoliciesOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ListOrgResourcePoliciesOutput>;

// The operation
/**
 * Return All Atlas Resource Policies
 *
 * Return all Atlas Resource Policies for the organization.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param orgId - Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [`/orgs`](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
 */
export const listOrgResourcePolicies = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListOrgResourcePoliciesInput,
  outputSchema: ListOrgResourcePoliciesOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
