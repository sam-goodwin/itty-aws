import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface DeleteOrgApiKeyAccessListEntryInput {
  orgId: string;
  apiUserId: string;
  ipAddress: string;
  envelope?: boolean;
  pretty?: boolean;
}
export const DeleteOrgApiKeyAccessListEntryInput =
  /*@__PURE__*/ Schema.Struct({
    orgId: Schema.String.pipe(T.PathParam()),
    apiUserId: Schema.String.pipe(T.PathParam()),
    ipAddress: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    pretty: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/atlas/v2/orgs/{orgId}/apiKeys/{apiUserId}/accessList/{ipAddress}",
    }),
  ) as unknown as Schema.Codec<DeleteOrgApiKeyAccessListEntryInput>;

// Output Schema
export type DeleteOrgApiKeyAccessListEntryOutput = void;
export const DeleteOrgApiKeyAccessListEntryOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteOrgApiKeyAccessListEntryOutput>;

// The operation
/**
 * Remove One Access List Entry for One Organization API Key
 *
 * Removes the specified access list entry from the specified organization API key. Resources require all API requests originate from the IP addresses on the API access list. In addition, you cannot remove the requesting IP address from the requesting organization API key.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param orgId - Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [`/orgs`](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param apiUserId - Unique 24-hexadecimal digit string that identifies this organization API key for which you want to remove access list entries.
 * @param ipAddress - One IP address or multiple IP addresses represented as one CIDR block to limit requests to API resources in the specified organization. When adding a CIDR block with a subnet mask, such as 192.0.2.0/24, use the URL-encoded value %2F for the forward slash /.
 */
export const deleteOrgApiKeyAccessListEntry =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteOrgApiKeyAccessListEntryInput,
    outputSchema: DeleteOrgApiKeyAccessListEntryOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
