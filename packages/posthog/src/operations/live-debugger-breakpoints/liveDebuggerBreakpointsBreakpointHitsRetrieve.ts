import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const LiveDebuggerBreakpointsBreakpointHitsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    breakpoint_ids: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/live_debugger_breakpoints/breakpoint_hits/",
    }),
  );
export type LiveDebuggerBreakpointsBreakpointHitsRetrieveInput =
  typeof LiveDebuggerBreakpointsBreakpointHitsRetrieveInput.Type;

// Output Schema
export const LiveDebuggerBreakpointsBreakpointHitsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        lineNumber: Schema.Number,
        functionName: Schema.String,
        timestamp: Schema.String,
        variables: Schema.Record(Schema.String, Schema.Unknown),
        stackTrace: Schema.Array(Schema.Unknown),
        breakpoint_id: Schema.String,
        filename: Schema.String,
      }),
    ),
    count: Schema.Number,
    has_more: Schema.Boolean,
  });
export type LiveDebuggerBreakpointsBreakpointHitsRetrieveOutput =
  typeof LiveDebuggerBreakpointsBreakpointHitsRetrieveOutput.Type;

// The operation
/**
 * Get breakpoint hits
 *
 * Retrieve breakpoint hit events from ClickHouse with optional filtering and pagination. Returns hit events containing stack traces, local variables, and execution context from your application's runtime.
 * Security: Breakpoint IDs are filtered to only include those belonging to the current team.
 *
 * @param breakpoint_ids - Filter hits for specific breakpoints (repeat parameter for multiple IDs, e.g., ?breakpoint_ids=uuid1&breakpoint_ids=uuid2)
 * @param limit - Number of hits to return (default: 100, max: 1000)
 * @param offset - Pagination offset for retrieving additional results (default: 0)
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const liveDebuggerBreakpointsBreakpointHitsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LiveDebuggerBreakpointsBreakpointHitsRetrieveInput,
    outputSchema: LiveDebuggerBreakpointsBreakpointHitsRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
