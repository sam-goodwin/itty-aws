import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListGroupPrivateEndpointEndpointServiceInput {
  groupId: string;
  cloudProvider: "AWS" | "AZURE" | "GCP";
  envelope?: boolean;
  pretty?: boolean;
}
export const ListGroupPrivateEndpointEndpointServiceInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    cloudProvider: Schema.Literals(["AWS", "AZURE", "GCP"]).pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    pretty: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/atlas/v2/groups/{groupId}/privateEndpoint/{cloudProvider}/endpointService",
    }),
  ) as unknown as Schema.Codec<ListGroupPrivateEndpointEndpointServiceInput>;

// Output Schema
export type ListGroupPrivateEndpointEndpointServiceOutput = void;
export const ListGroupPrivateEndpointEndpointServiceOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ListGroupPrivateEndpointEndpointServiceOutput>;

// The operation
/**
 * Return All Private Endpoint Services for One Provider
 *
 * Returns the name, interfaces, and state of all private endpoint services for the specified cloud service provider. This cloud service provider manages the private endpoint service for the project.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param cloudProvider - Cloud service provider that manages this private endpoint service.
 */
export const listGroupPrivateEndpointEndpointService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ListGroupPrivateEndpointEndpointServiceInput,
    outputSchema: ListGroupPrivateEndpointEndpointServiceOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
