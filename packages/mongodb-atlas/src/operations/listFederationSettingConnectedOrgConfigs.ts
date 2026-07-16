import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListFederationSettingConnectedOrgConfigsInput {
  federationSettingsId: string;
  envelope?: boolean;
  itemsPerPage?: number;
  pageNum?: number;
}
export const ListFederationSettingConnectedOrgConfigsInput =
  /*@__PURE__*/ Schema.Struct({
    federationSettingsId: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    itemsPerPage: Schema.optional(Schema.Number),
    pageNum: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs",
    }),
  ) as unknown as Schema.Codec<ListFederationSettingConnectedOrgConfigsInput>;

// Output Schema
export type ListFederationSettingConnectedOrgConfigsOutput = void;
export const ListFederationSettingConnectedOrgConfigsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ListFederationSettingConnectedOrgConfigsOutput>;

// The operation
/**
 * Return All Organization Configurations from One Federation
 *
 * Returns all connected organization configurations in the specified federation. To use this resource, the requesting Service Account or API Key must have the Organization Owner role in one of the connected organizations.
 *
 * @param federationSettingsId - Unique 24-hexadecimal digit string that identifies your federation.
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param itemsPerPage - Number of items that the response returns per page.
 * @param pageNum - Number of the page that displays the current set of the total objects that the response returns.
 */
export const listFederationSettingConnectedOrgConfigs =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ListFederationSettingConnectedOrgConfigsInput,
    outputSchema: ListFederationSettingConnectedOrgConfigsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
