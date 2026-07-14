import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GrantPermissionToProjectInput {
  project_id: string;
  email: string;
}
export const GrantPermissionToProjectInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    email: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/projects/{project_id}/permissions" }),
  ) as unknown as Schema.Codec<GrantPermissionToProjectInput>;

// Output Schema
export interface GrantPermissionToProjectOutput {
  id: string;
  granted_to_email: string;
  granted_at: string;
  revoked_at?: string;
}
export const GrantPermissionToProjectOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    granted_to_email: Schema.String,
    granted_at: Schema.String,
    revoked_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GrantPermissionToProjectOutput>;

// The operation
/**
 * Grant project access
 *
 * Grants project access to the account associated with the specified email address.
 */
export const grantPermissionToProject = /*@__PURE__*/ API.make(() => ({
  inputSchema: GrantPermissionToProjectInput,
  outputSchema: GrantPermissionToProjectOutput,
}));
