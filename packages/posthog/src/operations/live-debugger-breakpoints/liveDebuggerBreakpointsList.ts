import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LiveDebuggerBreakpointsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    filename: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    repository: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/live_debugger_breakpoints/",
    }),
  );
export type LiveDebuggerBreakpointsListInput =
  typeof LiveDebuggerBreakpointsListInput.Type;

// Output Schema
export const LiveDebuggerBreakpointsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        repository: Schema.optional(Schema.NullOr(Schema.String)),
        filename: Schema.String,
        line_number: Schema.Number,
        enabled: Schema.optional(Schema.Boolean),
        condition: Schema.optional(Schema.NullOr(Schema.String)),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
  });
export type LiveDebuggerBreakpointsListOutput =
  typeof LiveDebuggerBreakpointsListOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete breakpoints for live debugging.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const liveDebuggerBreakpointsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LiveDebuggerBreakpointsListInput,
    outputSchema: LiveDebuggerBreakpointsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
