import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1DeleteAProjectInput {
  ref: string;
}
export const V1DeleteAProjectInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/v1/projects/{ref}" }),
) as unknown as Schema.Codec<V1DeleteAProjectInput>;

// Output Schema
export interface V1DeleteAProjectOutput {
  id: number;
  ref: string;
  name: string;
}
export const V1DeleteAProjectOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.Number,
    ref: Schema.String,
    name: Schema.String,
  },
) as unknown as Schema.Codec<V1DeleteAProjectOutput>;

// The operation
/**
 * Deletes the given project
 *
 * @param ref - Project ref
 */
export const v1DeleteAProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1DeleteAProjectInput,
  outputSchema: V1DeleteAProjectOutput,
  errors: [BadRequest, Forbidden] as const,
}));
