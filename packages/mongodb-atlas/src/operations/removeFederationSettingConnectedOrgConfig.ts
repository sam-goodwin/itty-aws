import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface RemoveFederationSettingConnectedOrgConfigInput {
  federationSettingsId: string;
  orgId: string;
  envelope?: boolean;
}
export const RemoveFederationSettingConnectedOrgConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    federationSettingsId: Schema.String.pipe(T.PathParam()),
    orgId: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}",
    }),
  ) as unknown as Schema.Codec<RemoveFederationSettingConnectedOrgConfigInput>;

// Output Schema
export type RemoveFederationSettingConnectedOrgConfigOutput = void;
export const RemoveFederationSettingConnectedOrgConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RemoveFederationSettingConnectedOrgConfigOutput>;

// The operation
/**
 * Remove One Organization Configuration from One Federation
 *
 * Removes one connected organization configuration from the specified federation. Note: This request fails if only one connected organization exists in the federation.
 *
 * @param federationSettingsId - Unique 24-hexadecimal digit string that identifies your federation.
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param orgId - Unique 24-hexadecimal digit string that identifies the connected organization configuration to remove.
 */
export const removeFederationSettingConnectedOrgConfig =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemoveFederationSettingConnectedOrgConfigInput,
    outputSchema: RemoveFederationSettingConnectedOrgConfigOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
