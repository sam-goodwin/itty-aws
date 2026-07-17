import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface DeleteFederationSettingConnectedOrgConfigRoleMappingInput {
  federationSettingsId: string;
  id: string;
  orgId: string;
  envelope?: boolean;
}
export const DeleteFederationSettingConnectedOrgConfigRoleMappingInput =
  /*@__PURE__*/ Schema.Struct({
    federationSettingsId: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    orgId: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings/{id}",
    }),
  ) as unknown as Schema.Codec<DeleteFederationSettingConnectedOrgConfigRoleMappingInput>;

// Output Schema
export type DeleteFederationSettingConnectedOrgConfigRoleMappingOutput = void;
export const DeleteFederationSettingConnectedOrgConfigRoleMappingOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteFederationSettingConnectedOrgConfigRoleMappingOutput>;

// The operation
/**
 * Remove One Role Mapping from One Organization
 *
 * Removes one role mapping in the specified organization from the specified federation.
 *
 * @param federationSettingsId - Unique 24-hexadecimal digit string that identifies your federation.
 * @param id - Unique 24-hexadecimal digit string that identifies the role mapping that you want to remove.
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param orgId - Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [`/orgs`](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
 */
export const deleteFederationSettingConnectedOrgConfigRoleMapping =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteFederationSettingConnectedOrgConfigRoleMappingInput,
    outputSchema: DeleteFederationSettingConnectedOrgConfigRoleMappingOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
