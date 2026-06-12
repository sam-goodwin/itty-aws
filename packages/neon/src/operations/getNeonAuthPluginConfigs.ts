import * as Schema from "effect/Schema";
import {
  NeonAuthEmailAndPasswordConfigSchema,
  NeonAuthEmailServerConfigSchema,
  NeonAuthOauthProviderSchema,
  NeonAuthOrganizationConfigSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetNeonAuthPluginConfigsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/branches/{branch_id}/auth/plugins",
    }),
  );
export type GetNeonAuthPluginConfigsInput =
  typeof GetNeonAuthPluginConfigsInput.Type;

// Output Schema
export const GetNeonAuthPluginConfigsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.optional(
      Schema.suspend(() => NeonAuthOrganizationConfigSchema),
    ),
    email_provider: Schema.optional(
      Schema.suspend(() => NeonAuthEmailServerConfigSchema),
    ),
    email_and_password: Schema.optional(
      Schema.suspend(() => NeonAuthEmailAndPasswordConfigSchema),
    ),
    oauth_providers: Schema.optional(
      Schema.Array(Schema.suspend(() => NeonAuthOauthProviderSchema)),
    ),
    allow_localhost: Schema.optional(Schema.Boolean),
  });
export type GetNeonAuthPluginConfigsOutput =
  typeof GetNeonAuthPluginConfigsOutput.Type;

// The operation
/**
 * Get all plugin configurations
 *
 * Returns all plugin configurations for Neon Auth in a single response.
 * This endpoint aggregates organization, email provider, email and password,
 * OAuth providers, and localhost settings.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const getNeonAuthPluginConfigs = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetNeonAuthPluginConfigsInput,
    outputSchema: GetNeonAuthPluginConfigsOutput,
  }),
);
