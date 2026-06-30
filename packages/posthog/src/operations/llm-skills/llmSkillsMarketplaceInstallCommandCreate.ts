import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const LlmSkillsMarketplaceInstallCommandCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    rotate: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/llm_skills/marketplace/install-command/",
    }),
  );
export type LlmSkillsMarketplaceInstallCommandCreateInput =
  typeof LlmSkillsMarketplaceInstallCommandCreateInput.Type;

// Output Schema
export const LlmSkillsMarketplaceInstallCommandCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.Literals(["absent", "exists", "created", "rotated"]),
    connected: Schema.Boolean,
    plugin_name: Schema.String,
    marketplace_name: Schema.String,
    label: Schema.String,
    repo_url: Schema.String,
    command: Schema.NullOr(Schema.String),
    command_template: Schema.String,
    codex_command: Schema.NullOr(Schema.String),
    codex_command_template: Schema.String,
    token: Schema.NullOr(Schema.String),
    mask_value: Schema.NullOr(Schema.String),
    created_at: Schema.NullOr(Schema.String),
    last_rolled_at: Schema.NullOr(Schema.String),
  });
export type LlmSkillsMarketplaceInstallCommandCreateOutput =
  typeof LlmSkillsMarketplaceInstallCommandCreateOutput.Type;

// The operation
/**
 * Mint the user's read-only marketplace credential (or rotate it) and return the install command.
 * Per-user: rotating only ever invalidates this user's own credential, never a teammate's.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmSkillsMarketplaceInstallCommandCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmSkillsMarketplaceInstallCommandCreateInput,
    outputSchema: LlmSkillsMarketplaceInstallCommandCreateOutput,
  }));
