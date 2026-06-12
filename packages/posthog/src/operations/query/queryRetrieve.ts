import * as Schema from "effect/Schema";
import { QueryStatusSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const QueryRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/query/{id}/" }),
);
export type QueryRetrieveInput = typeof QueryRetrieveInput.Type;

// Output Schema
export const QueryRetrieveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  query_status: Schema.optional(Schema.suspend(() => QueryStatusSchema)),
});
export type QueryRetrieveOutput = typeof QueryRetrieveOutput.Type;

// The operation
/**
 * (Experimental)
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const queryRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueryRetrieveInput,
  outputSchema: QueryRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
