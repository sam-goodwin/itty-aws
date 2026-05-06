import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const UpdateNeonAuthConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/projects/{project_id}/branches/{branch_id}/auth/config",
    }),
  );
export type UpdateNeonAuthConfigInput = typeof UpdateNeonAuthConfigInput.Type;

// Output Schema
export const UpdateNeonAuthConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
  });
export type UpdateNeonAuthConfigOutput = typeof UpdateNeonAuthConfigOutput.Type;

// The operation
/**
 * Update auth configuration
 *
 * Updates the auth configuration for the branch.
 * Currently supports updating the application name used in auth emails.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const updateNeonAuthConfig = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateNeonAuthConfigInput,
    outputSchema: UpdateNeonAuthConfigOutput,
  }),
);
