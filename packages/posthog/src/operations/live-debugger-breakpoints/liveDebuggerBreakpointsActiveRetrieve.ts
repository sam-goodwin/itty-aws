import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const LiveDebuggerBreakpointsActiveRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    enabled: Schema.optional(Schema.Boolean),
    filename: Schema.optional(Schema.String),
    repository: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/live_debugger_breakpoints/active/",
    }),
  );
export type LiveDebuggerBreakpointsActiveRetrieveInput =
  typeof LiveDebuggerBreakpointsActiveRetrieveInput.Type;

// Output Schema
export const LiveDebuggerBreakpointsActiveRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    breakpoints: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        repository: Schema.optional(Schema.NullOr(Schema.String)),
        filename: Schema.String,
        line_number: Schema.Number,
        enabled: Schema.Boolean,
        condition: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  });
export type LiveDebuggerBreakpointsActiveRetrieveOutput =
  typeof LiveDebuggerBreakpointsActiveRetrieveOutput.Type;

// The operation
/**
 * Get active breakpoints (External API)
 *
 * External API endpoint for client applications to fetch active breakpoints using Project API key. This endpoint allows external client applications (like Python scripts, Node.js apps, etc.) to fetch the list of active breakpoints so they can instrument their code accordingly.
 * Authentication: Requires a Project API Key in the Authorization header: `Authorization: Bearer phs_<your-project-api-key>`. You can find your Project API Key in PostHog at: Settings → Project → Project API Key
 *
 * @param enabled - Only return enabled breakpoints
 * @param filename - Filter breakpoints for a specific file
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param repository - Filter breakpoints for a specific repository (e.g., 'PostHog/posthog')
 */
export const liveDebuggerBreakpointsActiveRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LiveDebuggerBreakpointsActiveRetrieveInput,
    outputSchema: LiveDebuggerBreakpointsActiveRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
