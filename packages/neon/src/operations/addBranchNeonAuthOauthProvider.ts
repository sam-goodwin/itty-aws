import * as Schema from "effect/Schema";
import {
  NeonAuthOauthProviderIdSchema,
  NeonAuthOauthProviderTypeSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString, SensitiveOutputString } from "../sensitive.ts";

// Input Schema
export const AddBranchNeonAuthOauthProviderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    id: Schema.suspend(() => NeonAuthOauthProviderIdSchema),
    client_id: Schema.optional(Schema.String),
    client_secret: Schema.optional(SensitiveString),
    microsoft_tenant_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/branches/{branch_id}/auth/oauth_providers",
    }),
  );
export type AddBranchNeonAuthOauthProviderInput =
  typeof AddBranchNeonAuthOauthProviderInput.Type;

// Output Schema
export const AddBranchNeonAuthOauthProviderOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.suspend(() => NeonAuthOauthProviderIdSchema),
    type: Schema.suspend(() => NeonAuthOauthProviderTypeSchema),
    client_id: Schema.optional(Schema.String),
    client_secret: Schema.optional(SensitiveOutputString),
  });
export type AddBranchNeonAuthOauthProviderOutput =
  typeof AddBranchNeonAuthOauthProviderOutput.Type;

// The operation
/**
 * Add a OAuth provider
 *
 * Adds a OAuth provider to the specified project.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const addBranchNeonAuthOauthProvider =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AddBranchNeonAuthOauthProviderInput,
    outputSchema: AddBranchNeonAuthOauthProviderOutput,
  }));
