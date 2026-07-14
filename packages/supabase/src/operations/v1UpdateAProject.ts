import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1UpdateAProjectInput {
  ref: string;
  name: string;
}
export const V1UpdateAProjectInput = /*@__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
  name: Schema.String,
}).pipe(
  T.Http({ method: "PATCH", path: "/v1/projects/{ref}" }),
) as unknown as Schema.Codec<V1UpdateAProjectInput>;

// Output Schema
export interface V1UpdateAProjectOutput {
  id: number;
  ref: string;
  name: string;
}
export const V1UpdateAProjectOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.Number,
  ref: Schema.String,
  name: Schema.String,
}) as unknown as Schema.Codec<V1UpdateAProjectOutput>;

// The operation
/**
 * Updates the given project
 *
 * @param ref - Project ref
 */
export const v1UpdateAProject = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1UpdateAProjectInput,
  outputSchema: V1UpdateAProjectOutput,
  errors: [BadRequest, Forbidden] as const,
}));
