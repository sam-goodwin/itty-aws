import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface LiveDebuggerBreakpointsBreakpointHitsRetrieveInput {
  project_id: string;
  breakpoint_ids?: string;
  limit?: number;
  offset?: number;
}
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
  ) as unknown as Schema.Codec<LiveDebuggerBreakpointsBreakpointHitsRetrieveInput>;

// Output Schema
export interface LiveDebuggerBreakpointsBreakpointHitsRetrieveOutput {
  results?: {
    id?: string;
    lineNumber?: number;
    functionName?: string;
    timestamp?: string;
    variables?: Record<string, unknown>;
    stackTrace?: unknown[];
    breakpoint_id?: string;
    filename?: string;
  }[];
  count?: number;
  has_more?: boolean;
}
export const LiveDebuggerBreakpointsBreakpointHitsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          lineNumber: Schema.optional(Schema.Number),
          functionName: Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          variables: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          stackTrace: Schema.optional(Schema.Array(Schema.Unknown)),
          breakpoint_id: Schema.optional(Schema.String),
          filename: Schema.optional(Schema.String),
        }),
      ),
    ),
    count: Schema.optional(Schema.Number),
    has_more: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<LiveDebuggerBreakpointsBreakpointHitsRetrieveOutput>;

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
