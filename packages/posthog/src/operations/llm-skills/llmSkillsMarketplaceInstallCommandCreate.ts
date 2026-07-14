import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmSkillsMarketplaceInstallCommandCreateInput {
  project_id: string;
  rotate?: boolean;
}
export const LlmSkillsMarketplaceInstallCommandCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    rotate: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/llm_skills/marketplace/install-command/",
    }),
  ) as unknown as Schema.Codec<LlmSkillsMarketplaceInstallCommandCreateInput>;

// Output Schema
export interface LlmSkillsMarketplaceInstallCommandCreateOutput {
  status: "absent" | "exists" | "created" | "rotated";
  connected: boolean;
  plugin_name: string;
  marketplace_name: string;
  label: string;
  repo_url: string;
  command: string | null;
  command_template: string;
  codex_command: string | null;
  codex_command_template: string;
  token: string | null;
  mask_value: string | null;
  created_at: string | null;
  last_rolled_at: string | null;
}
export const LlmSkillsMarketplaceInstallCommandCreateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<LlmSkillsMarketplaceInstallCommandCreateOutput>;

// The operation
/**
 * Mint the user's read-only marketplace credential (or rotate it) and return the install command.
 * Per-user: rotating only ever invalidates this user's own credential, never a teammate's.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmSkillsMarketplaceInstallCommandCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LlmSkillsMarketplaceInstallCommandCreateInput,
    outputSchema: LlmSkillsMarketplaceInstallCommandCreateOutput,
  }));
