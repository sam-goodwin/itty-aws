import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface LiveDebuggerBreakpointsCreateInput {
  project_id: string;
  id?: string;
  repository?: string | null;
  filename?: string;
  line_number?: number;
  enabled?: boolean;
  condition?: string | null;
  created_at?: string;
  updated_at?: string;
}
export const LiveDebuggerBreakpointsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    repository: Schema.optional(Schema.NullOr(Schema.String)),
    filename: Schema.optional(Schema.String),
    line_number: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
    condition: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/live_debugger_breakpoints/",
    }),
  ) as unknown as Schema.Codec<LiveDebuggerBreakpointsCreateInput>;

// Output Schema
export interface LiveDebuggerBreakpointsCreateOutput {
  id?: string;
  repository?: string | null;
  filename?: string;
  line_number?: number;
  enabled?: boolean;
  condition?: string | null;
  created_at?: string;
  updated_at?: string;
}
export const LiveDebuggerBreakpointsCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    repository: Schema.optional(Schema.NullOr(Schema.String)),
    filename: Schema.optional(Schema.String),
    line_number: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
    condition: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LiveDebuggerBreakpointsCreateOutput>;

// The operation
/**
 * Create, Read, Update and Delete breakpoints for live debugging.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const liveDebuggerBreakpointsCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LiveDebuggerBreakpointsCreateInput,
    outputSchema: LiveDebuggerBreakpointsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
