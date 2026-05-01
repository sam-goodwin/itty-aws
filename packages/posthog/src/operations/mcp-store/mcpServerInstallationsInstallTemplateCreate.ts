import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";
import { SensitiveString } from "../../sensitive.ts";

// Input Schema
export const McpServerInstallationsInstallTemplateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    template_id: Schema.String,
    api_key: Schema.optional(SensitiveString),
    install_source: Schema.optional(
      Schema.Literals(["posthog", "posthog-code"]),
    ),
    posthog_code_callback_url: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/mcp_server_installations/install_template/",
    }),
  );
export type McpServerInstallationsInstallTemplateCreateInput =
  typeof McpServerInstallationsInstallTemplateCreateInput.Type;

// Output Schema
export const McpServerInstallationsInstallTemplateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    redirect_url: Schema.String,
  });
export type McpServerInstallationsInstallTemplateCreateOutput =
  typeof McpServerInstallationsInstallTemplateCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpServerInstallationsInstallTemplateCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: McpServerInstallationsInstallTemplateCreateInput,
    outputSchema: McpServerInstallationsInstallTemplateCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
