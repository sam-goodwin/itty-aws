import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";
import { SensitiveString } from "../../sensitive.ts";

// Input Schema
export const McpServerInstallationsInstallCustomCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    url: Schema.String,
    auth_type: Schema.Literals(["api_key", "oauth"]),
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
      path: "/api/environments/{project_id}/mcp_server_installations/install_custom/",
    }),
  );
export type McpServerInstallationsInstallCustomCreateInput =
  typeof McpServerInstallationsInstallCustomCreateInput.Type;

// Output Schema
export const McpServerInstallationsInstallCustomCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    redirect_url: Schema.String,
  });
export type McpServerInstallationsInstallCustomCreateOutput =
  typeof McpServerInstallationsInstallCustomCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpServerInstallationsInstallCustomCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: McpServerInstallationsInstallCustomCreateInput,
    outputSchema: McpServerInstallationsInstallCustomCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
