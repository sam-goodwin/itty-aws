import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface UpdateNeonAuthAllowLocalhostInput {
  project_id: string;
  branch_id: string;
  allow_localhost: boolean;
}
export const UpdateNeonAuthAllowLocalhostInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    allow_localhost: Schema.Boolean,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/projects/{project_id}/branches/{branch_id}/auth/allow_localhost",
    }),
  ) as unknown as Schema.Codec<UpdateNeonAuthAllowLocalhostInput>;

// Output Schema
export interface UpdateNeonAuthAllowLocalhostOutput {
  allow_localhost: boolean;
}
export const UpdateNeonAuthAllowLocalhostOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allow_localhost: Schema.Boolean,
  }) as unknown as Schema.Codec<UpdateNeonAuthAllowLocalhostOutput>;

// The operation
/**
 * Update localhost allow setting
 *
 * Updates the localhost allow setting for the specified branch's Neon Auth integration.
 * When enabled, authentication flows work from `localhost` without adding it to the redirect URI whitelist.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const updateNeonAuthAllowLocalhost =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateNeonAuthAllowLocalhostInput,
    outputSchema: UpdateNeonAuthAllowLocalhostOutput,
  }));
