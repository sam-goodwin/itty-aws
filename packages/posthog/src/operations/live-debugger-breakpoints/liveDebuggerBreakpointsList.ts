import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface LiveDebuggerBreakpointsListInput {
  project_id: string;
  filename?: string;
  limit?: number;
  offset?: number;
  repository?: string;
}
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
  ) as unknown as Schema.Codec<LiveDebuggerBreakpointsListInput>;

// Output Schema
export interface LiveDebuggerBreakpointsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    repository?: string | null;
    filename?: string;
    line_number?: number;
    enabled?: boolean;
    condition?: string | null;
    created_at?: string;
    updated_at?: string;
  }[];
}
export const LiveDebuggerBreakpointsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          repository: Schema.optional(Schema.NullOr(Schema.String)),
          filename: Schema.optional(Schema.String),
          line_number: Schema.optional(Schema.Number),
          enabled: Schema.optional(Schema.Boolean),
          condition: Schema.optional(Schema.NullOr(Schema.String)),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LiveDebuggerBreakpointsListOutput>;

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
