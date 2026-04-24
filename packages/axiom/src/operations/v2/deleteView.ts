import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound } from "../../errors";

// Input Schema
export const DeleteViewInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/v2/views/{id}" }));
export type DeleteViewInput = typeof DeleteViewInput.Type;

// Output Schema
export const DeleteViewOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteViewOutput = typeof DeleteViewOutput.Type;

// The operation
export const deleteView = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteViewInput,
  outputSchema: DeleteViewOutput,
  errors: [NotFound] as const,
}));
