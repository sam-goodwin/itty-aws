import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface McpServerInstallationsAuthorizeRetrieveInput {
  project_id: string;
  install_source?: "posthog" | "posthog-code";
  installation_id?: string;
  posthog_code_callback_url?: string;
  template_id?: string;
}
export const McpServerInstallationsAuthorizeRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    install_source: Schema.optional(
      Schema.Literals(["posthog", "posthog-code"]),
    ),
    installation_id: Schema.optional(Schema.String),
    posthog_code_callback_url: Schema.optional(Schema.String),
    template_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/mcp_server_installations/authorize/",
    }),
  ) as unknown as Schema.Codec<McpServerInstallationsAuthorizeRetrieveInput>;

// Output Schema
export type McpServerInstallationsAuthorizeRetrieveOutput = void;
export const McpServerInstallationsAuthorizeRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<McpServerInstallationsAuthorizeRetrieveOutput>;

// The operation
/**
 * Start (or re-start) an OAuth flow.
 * Pass ``template_id`` to (re)connect a catalog template, or
 * ``installation_id`` to reconnect an existing custom install using its
 * cached metadata and per-user DCR creds.
 *
 * @param install_source - * `posthog` - posthog
 * `posthog-code` - posthog-code
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpServerInstallationsAuthorizeRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: McpServerInstallationsAuthorizeRetrieveInput,
    outputSchema: McpServerInstallationsAuthorizeRetrieveOutput,
  }));
