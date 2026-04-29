import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LiveDebuggerBreakpointsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/live_debugger_breakpoints/{id}/",
    }),
  );
export type LiveDebuggerBreakpointsRetrieveInput =
  typeof LiveDebuggerBreakpointsRetrieveInput.Type;

// Output Schema
export const LiveDebuggerBreakpointsRetrieveOutput =
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
export type LiveDebuggerBreakpointsRetrieveOutput =
  typeof LiveDebuggerBreakpointsRetrieveOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete breakpoints for live debugging.
 *
 * @param id - A UUID string identifying this live debugger breakpoint.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const liveDebuggerBreakpointsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LiveDebuggerBreakpointsRetrieveInput,
    outputSchema: LiveDebuggerBreakpointsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
