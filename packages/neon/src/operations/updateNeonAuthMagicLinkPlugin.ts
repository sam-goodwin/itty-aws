import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const UpdateNeonAuthMagicLinkPluginInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    enabled: Schema.optional(Schema.Boolean),
    expires_in: Schema.optional(Schema.Number),
    disable_sign_up: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/projects/{project_id}/branches/{branch_id}/auth/plugins/magic-link",
    }),
  );
export type UpdateNeonAuthMagicLinkPluginInput =
  typeof UpdateNeonAuthMagicLinkPluginInput.Type;

// Output Schema
export const UpdateNeonAuthMagicLinkPluginOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    expires_in: Schema.Number,
    disable_sign_up: Schema.Boolean,
  });
export type UpdateNeonAuthMagicLinkPluginOutput =
  typeof UpdateNeonAuthMagicLinkPluginOutput.Type;

// The operation
/**
 * Update magic link plugin configuration
 *
 * Updates the magic link plugin configuration for Neon Auth.
 * The magic link plugin enables passwordless authentication via email magic links.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const updateNeonAuthMagicLinkPlugin =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateNeonAuthMagicLinkPluginInput,
    outputSchema: UpdateNeonAuthMagicLinkPluginOutput,
  }));
