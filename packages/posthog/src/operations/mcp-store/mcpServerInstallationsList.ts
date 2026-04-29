import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const McpServerInstallationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/mcp_server_installations/",
    }),
  );
export type McpServerInstallationsListInput =
  typeof McpServerInstallationsListInput.Type;

// Output Schema
export const McpServerInstallationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        template_id: Schema.NullOr(Schema.String),
        name: Schema.String,
        icon_key: Schema.String,
        display_name: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        auth_type: Schema.optional(Schema.Literals(["api_key", "oauth"])),
        is_enabled: Schema.optional(Schema.Boolean),
        needs_reauth: Schema.Boolean,
        pending_oauth: Schema.Boolean,
        proxy_url: Schema.String,
        tool_count: Schema.Number,
        created_at: Schema.String,
        updated_at: Schema.NullOr(Schema.String),
      }),
    ),
  });
export type McpServerInstallationsListOutput =
  typeof McpServerInstallationsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpServerInstallationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: McpServerInstallationsListInput,
    outputSchema: McpServerInstallationsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
