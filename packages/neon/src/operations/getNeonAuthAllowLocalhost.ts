import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetNeonAuthAllowLocalhostInput {
  project_id: string;
  branch_id: string;
}
export const GetNeonAuthAllowLocalhostInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/branches/{branch_id}/auth/allow_localhost",
    }),
  ) as unknown as Schema.Codec<GetNeonAuthAllowLocalhostInput>;

// Output Schema
export interface GetNeonAuthAllowLocalhostOutput {
  allow_localhost: boolean;
}
export const GetNeonAuthAllowLocalhostOutput =
  /*@__PURE__*/ Schema.Struct({
    allow_localhost: Schema.Boolean,
  }) as unknown as Schema.Codec<GetNeonAuthAllowLocalhostOutput>;

// The operation
/**
 * Retrieve localhost allow setting
 *
 * Retrieves the localhost allow setting for the specified branch's Neon Auth integration.
 * When enabled, authentication flows work from `localhost` without adding it to the redirect URI whitelist.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const getNeonAuthAllowLocalhost = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetNeonAuthAllowLocalhostInput,
  outputSchema: GetNeonAuthAllowLocalhostOutput,
}));
