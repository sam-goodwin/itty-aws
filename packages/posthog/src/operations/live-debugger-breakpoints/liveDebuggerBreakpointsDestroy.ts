import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LiveDebuggerBreakpointsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/live_debugger_breakpoints/{id}/",
    }),
  );
export type LiveDebuggerBreakpointsDestroyInput =
  typeof LiveDebuggerBreakpointsDestroyInput.Type;

// Output Schema
export const LiveDebuggerBreakpointsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LiveDebuggerBreakpointsDestroyOutput =
  typeof LiveDebuggerBreakpointsDestroyOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete breakpoints for live debugging.
 *
 * @param id - A UUID string identifying this live debugger breakpoint.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const liveDebuggerBreakpointsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LiveDebuggerBreakpointsDestroyInput,
    outputSchema: LiveDebuggerBreakpointsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
