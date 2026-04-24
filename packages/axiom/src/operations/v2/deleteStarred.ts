import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound } from "../../errors";

// Input Schema
export const DeleteStarredInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/v2/apl-starred-queries/{id}" }));
export type DeleteStarredInput = typeof DeleteStarredInput.Type;

// Output Schema
export const DeleteStarredOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteStarredOutput = typeof DeleteStarredOutput.Type;

// The operation
export const deleteStarred = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteStarredInput,
  outputSchema: DeleteStarredOutput,
  errors: [NotFound] as const,
}));
