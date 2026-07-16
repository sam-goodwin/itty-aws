import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetOrgSettingsInput {
  orgId: string;
  envelope?: boolean;
  pretty?: boolean;
}
export const GetOrgSettingsInput = /*@__PURE__*/ Schema.Struct({
  orgId: Schema.String.pipe(T.PathParam()),
  envelope: Schema.optional(Schema.Boolean),
  pretty: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "GET", path: "/api/atlas/v2/orgs/{orgId}/settings" }),
) as unknown as Schema.Codec<GetOrgSettingsInput>;

// Output Schema
export type GetOrgSettingsOutput = void;
export const GetOrgSettingsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<GetOrgSettingsOutput>;

// The operation
/**
 * Return Settings for One Organization
 *
 * Returns details about the specified organization's settings.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param orgId - Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [`/orgs`](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 */
export const getOrgSettings = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetOrgSettingsInput,
  outputSchema: GetOrgSettingsOutput,
  errors: [Forbidden, NotFound] as const,
}));
