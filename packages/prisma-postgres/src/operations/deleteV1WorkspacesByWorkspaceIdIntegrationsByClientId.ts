import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DeleteV1WorkspacesByWorkspaceIdIntegrationsByClientIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.String.pipe(T.PathParam()),
    workspaceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/workspaces/{workspaceId}/integrations/{clientId}",
    }),
  );
export type DeleteV1WorkspacesByWorkspaceIdIntegrationsByClientIdInput =
  typeof DeleteV1WorkspacesByWorkspaceIdIntegrationsByClientIdInput.Type;

// Output Schema
export const DeleteV1WorkspacesByWorkspaceIdIntegrationsByClientIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteV1WorkspacesByWorkspaceIdIntegrationsByClientIdOutput =
  typeof DeleteV1WorkspacesByWorkspaceIdIntegrationsByClientIdOutput.Type;

// The operation
/**
 * Revoke integration tokens
 *
 * Revokes the integration tokens with the given client ID.
 */
export const deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteV1WorkspacesByWorkspaceIdIntegrationsByClientIdInput,
    outputSchema: DeleteV1WorkspacesByWorkspaceIdIntegrationsByClientIdOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
