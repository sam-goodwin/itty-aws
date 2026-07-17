import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListGroupDataFederationInput {
  groupId: string;
  envelope?: boolean;
  pretty?: boolean;
  type?: "USER" | "ONLINE_ARCHIVE";
}
export const ListGroupDataFederationInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    pretty: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.Literals(["USER", "ONLINE_ARCHIVE"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/atlas/v2/groups/{groupId}/dataFederation",
    }),
  ) as unknown as Schema.Codec<ListGroupDataFederationInput>;

// Output Schema
export type ListGroupDataFederationOutput = void;
export const ListGroupDataFederationOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ListGroupDataFederationOutput>;

// The operation
/**
 * Return All Federated Database Instances in One Project
 *
 * Returns the details of all federated database instances in the specified project.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param type - Type of Federated Database Instances to return.
 */
export const listGroupDataFederation = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListGroupDataFederationInput,
  outputSchema: ListGroupDataFederationOutput,
  errors: [Forbidden, NotFound] as const,
}));
