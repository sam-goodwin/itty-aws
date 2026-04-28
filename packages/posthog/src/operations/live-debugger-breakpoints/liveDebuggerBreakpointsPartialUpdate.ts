import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const LiveDebuggerBreakpointsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    repository: Schema.optional(Schema.NullOr(Schema.String)),
    filename: Schema.optional(Schema.String),
    line_number: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
    condition: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/live_debugger_breakpoints/{id}/",
    }),
  );
export type LiveDebuggerBreakpointsPartialUpdateInput =
  typeof LiveDebuggerBreakpointsPartialUpdateInput.Type;

// Output Schema
export const LiveDebuggerBreakpointsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    repository: Schema.optional(Schema.NullOr(Schema.String)),
    filename: Schema.String,
    line_number: Schema.Number,
    enabled: Schema.optional(Schema.Boolean),
    condition: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type LiveDebuggerBreakpointsPartialUpdateOutput =
  typeof LiveDebuggerBreakpointsPartialUpdateOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete breakpoints for live debugging.
 *
 * @param id - A UUID string identifying this live debugger breakpoint.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const liveDebuggerBreakpointsPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LiveDebuggerBreakpointsPartialUpdateInput,
    outputSchema: LiveDebuggerBreakpointsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
