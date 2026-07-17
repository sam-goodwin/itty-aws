import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface RevokePermissionFromProjectInput {
  project_id: string;
  permission_id: string;
}
export const RevokePermissionFromProjectInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    permission_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/projects/{project_id}/permissions/{permission_id}",
    }),
  ) as unknown as Schema.Codec<RevokePermissionFromProjectInput>;

// Output Schema
export interface RevokePermissionFromProjectOutput {
  id: string;
  granted_to_email: string;
  granted_at: string;
  revoked_at?: string;
}
export const RevokePermissionFromProjectOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    granted_to_email: Schema.String,
    granted_at: Schema.String,
    revoked_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RevokePermissionFromProjectOutput>;

// The operation
/**
 * Revoke project access
 *
 * Revokes project access from the user associated with the specified permission `id`. You can retrieve a user's permission `id` by listing project access.
 */
export const revokePermissionFromProject = /*@__PURE__*/ API.make(() => ({
  inputSchema: RevokePermissionFromProjectInput,
  outputSchema: RevokePermissionFromProjectOutput,
}));
