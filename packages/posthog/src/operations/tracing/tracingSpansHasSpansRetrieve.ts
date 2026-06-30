import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const TracingSpansHasSpansRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/tracing/spans/has_spans/",
    }),
  );
export type TracingSpansHasSpansRetrieveInput =
  typeof TracingSpansHasSpansRetrieveInput.Type;

// Output Schema
export const TracingSpansHasSpansRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hasSpans: Schema.Boolean,
  });
export type TracingSpansHasSpansRetrieveOutput =
  typeof TracingSpansHasSpansRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tracingSpansHasSpansRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TracingSpansHasSpansRetrieveInput,
    outputSchema: TracingSpansHasSpansRetrieveOutput,
  }));
