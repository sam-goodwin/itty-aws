import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const QueryDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/api/projects/{project_id}/query/{id}/" }),
);
export type QueryDestroyInput = typeof QueryDestroyInput.Type;

// Output Schema
export const QueryDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type QueryDestroyOutput = typeof QueryDestroyOutput.Type;

// The operation
/**
 * (Experimental)
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const queryDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueryDestroyInput,
  outputSchema: QueryDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
