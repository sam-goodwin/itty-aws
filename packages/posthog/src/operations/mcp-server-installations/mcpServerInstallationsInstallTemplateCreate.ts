import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { SensitiveString } from "../../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface McpServerInstallationsInstallTemplateCreateInput {
  project_id: string;
  template_id?: string;
  api_key?: string | Redacted.Redacted<string>;
  install_source?: "posthog" | "posthog-code";
  posthog_code_callback_url?: string;
}
export const McpServerInstallationsInstallTemplateCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    template_id: Schema.optional(Schema.String),
    api_key: Schema.optional(SensitiveString),
    install_source: Schema.optional(
      Schema.Literals(["posthog", "posthog-code"]),
    ),
    posthog_code_callback_url: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/mcp_server_installations/install_template/",
    }),
  ) as unknown as Schema.Codec<McpServerInstallationsInstallTemplateCreateInput>;

// Output Schema
export interface McpServerInstallationsInstallTemplateCreateOutput {
  redirect_url?: string;
}
export const McpServerInstallationsInstallTemplateCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    redirect_url: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<McpServerInstallationsInstallTemplateCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpServerInstallationsInstallTemplateCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: McpServerInstallationsInstallTemplateCreateInput,
    outputSchema: McpServerInstallationsInstallTemplateCreateOutput,
  }));
