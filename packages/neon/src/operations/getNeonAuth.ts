import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetNeonAuthInput {
  project_id: string;
  branch_id: string;
}
export const GetNeonAuthInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  branch_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/projects/{project_id}/branches/{branch_id}/auth",
  }),
) as unknown as Schema.Codec<GetNeonAuthInput>;

// Output Schema
export interface GetNeonAuthOutput {
  auth_provider: "mock" | "stack" | "better_auth";
  auth_provider_project_id: string;
  branch_id: string;
  db_name: string;
  created_at: string;
  owned_by: "user" | "neon";
  transfer_status?: "initiated" | "finished";
  jwks_url: string;
  base_url?: string;
  name?: string;
}
export const GetNeonAuthOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  auth_provider: Schema.Literals(["mock", "stack", "better_auth"]),
  auth_provider_project_id: Schema.String,
  branch_id: Schema.String,
  db_name: Schema.String,
  created_at: Schema.String,
  owned_by: Schema.Literals(["user", "neon"]),
  transfer_status: Schema.optional(Schema.Literals(["initiated", "finished"])),
  jwks_url: Schema.String,
  base_url: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<GetNeonAuthOutput>;

// The operation
/**
 * Retrieve Neon Auth details for the branch
 *
 * Retrieves the Neon Auth integration details for the specified branch,
 * including the auth provider type and integration status.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const getNeonAuth = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetNeonAuthInput,
  outputSchema: GetNeonAuthOutput,
}));
