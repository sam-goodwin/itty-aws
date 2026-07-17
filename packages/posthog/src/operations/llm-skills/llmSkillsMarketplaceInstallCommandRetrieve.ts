import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmSkillsMarketplaceInstallCommandRetrieveInput {
  project_id: string;
}
export const LlmSkillsMarketplaceInstallCommandRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/llm_skills/marketplace/install-command/",
    }),
  ) as unknown as Schema.Codec<LlmSkillsMarketplaceInstallCommandRetrieveInput>;

// Output Schema
export interface LlmSkillsMarketplaceInstallCommandRetrieveOutput {
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
export const LlmSkillsMarketplaceInstallCommandRetrieveOutput =
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
  }) as unknown as Schema.Codec<LlmSkillsMarketplaceInstallCommandRetrieveOutput>;

// The operation
/**
 * Report whether the user already has a marketplace credential, without minting one.
 * The token is unrecoverable, so an existing credential returns its mask only — the UI shows
 * "already connected, existing setups keep working" and offers an explicit rotate.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmSkillsMarketplaceInstallCommandRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LlmSkillsMarketplaceInstallCommandRetrieveInput,
    outputSchema: LlmSkillsMarketplaceInstallCommandRetrieveOutput,
  }));
