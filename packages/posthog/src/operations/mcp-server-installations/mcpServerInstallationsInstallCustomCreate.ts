import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { SensitiveString } from "../../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface McpServerInstallationsInstallCustomCreateInput {
  project_id: string;
  name?: string;
  url?: string;
  auth_type?: "api_key" | "oauth";
  api_key?: string | Redacted.Redacted<string>;
  description?: string;
  client_id?: string;
  client_secret?: string | Redacted.Redacted<string>;
  install_source?: "posthog" | "posthog-code";
  posthog_code_callback_url?: string;
}
export const McpServerInstallationsInstallCustomCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    auth_type: Schema.optional(Schema.Literals(["api_key", "oauth"])),
    api_key: Schema.optional(SensitiveString),
    description: Schema.optional(Schema.String),
    client_id: Schema.optional(Schema.String),
    client_secret: Schema.optional(SensitiveString),
    install_source: Schema.optional(
      Schema.Literals(["posthog", "posthog-code"]),
    ),
    posthog_code_callback_url: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/mcp_server_installations/install_custom/",
    }),
  ) as unknown as Schema.Codec<McpServerInstallationsInstallCustomCreateInput>;

// Output Schema
export interface McpServerInstallationsInstallCustomCreateOutput {
  redirect_url?: string;
}
export const McpServerInstallationsInstallCustomCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    redirect_url: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<McpServerInstallationsInstallCustomCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpServerInstallationsInstallCustomCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: McpServerInstallationsInstallCustomCreateInput,
    outputSchema: McpServerInstallationsInstallCustomCreateOutput,
  }));
