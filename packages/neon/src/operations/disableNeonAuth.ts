import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DisableNeonAuthInput {
  project_id: string;
  branch_id: string;
  delete_data?: boolean;
}
export const DisableNeonAuthInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  branch_id: Schema.String.pipe(T.PathParam()),
  delete_data: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/projects/{project_id}/branches/{branch_id}/auth",
  }),
) as unknown as Schema.Codec<DisableNeonAuthInput>;

// Output Schema
export type DisableNeonAuthOutput = void;
export const DisableNeonAuthOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DisableNeonAuthOutput>;

// The operation
/**
 * Disable Neon Auth for the branch
 *
 * Disables the Neon Auth integration for the specified branch, removing the connection
 * to the authentication provider.
 * If `delete_data` is `true`, also deletes the `neon_auth` schema and all associated tables
 * from the branch database.
 * The integration can be re-enabled by calling `POST /projects/{project_id}/branches/{branch_id}/auth`.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const disableNeonAuth = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DisableNeonAuthInput,
  outputSchema: DisableNeonAuthOutput,
}));
