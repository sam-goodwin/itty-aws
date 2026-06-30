import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1UndoInput {
  ref: string;
  name: string;
}
export const V1UndoInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
  name: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/v1/projects/{ref}/database/backups/undo" }),
) as unknown as Schema.Codec<V1UndoInput>;

// Output Schema
export type V1UndoOutput = void;
export const V1UndoOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<V1UndoOutput>;

// The operation
/**
 * Initiates an undo to a given restore point
 *
 * @param ref - Project ref
 */
export const v1Undo = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1UndoInput,
  outputSchema: V1UndoOutput,
  errors: [BadRequest, Forbidden] as const,
}));
