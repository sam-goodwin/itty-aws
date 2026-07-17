import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface DeleteV1WorkspacesByWorkspaceIdIntegrationsByClientIdInput {
  clientId: string;
  workspaceId: string;
}
export const DeleteV1WorkspacesByWorkspaceIdIntegrationsByClientIdInput =
  /*@__PURE__*/ Schema.Struct({
    clientId: Schema.String.pipe(T.PathParam()),
    workspaceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/workspaces/{workspaceId}/integrations/{clientId}",
    }),
  ) as unknown as Schema.Codec<DeleteV1WorkspacesByWorkspaceIdIntegrationsByClientIdInput>;

// Output Schema
export type DeleteV1WorkspacesByWorkspaceIdIntegrationsByClientIdOutput = void;
export const DeleteV1WorkspacesByWorkspaceIdIntegrationsByClientIdOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteV1WorkspacesByWorkspaceIdIntegrationsByClientIdOutput>;

// The operation
/**
 * Revoke integration tokens
 *
 * Revokes the integration tokens with the given client ID.
 */
export const deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteV1WorkspacesByWorkspaceIdIntegrationsByClientIdInput,
    outputSchema: DeleteV1WorkspacesByWorkspaceIdIntegrationsByClientIdOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
