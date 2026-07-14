import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1RestoreAProjectInput {
  ref: string;
}
export const V1RestoreAProjectInput = /*@__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "POST", path: "/v1/projects/{ref}/restore" }),
) as unknown as Schema.Codec<V1RestoreAProjectInput>;

// Output Schema
export type V1RestoreAProjectOutput = void;
export const V1RestoreAProjectOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1RestoreAProjectOutput>;

// The operation
/**
 * Restores the given project
 *
 * @param ref - Project ref
 */
export const v1RestoreAProject = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1RestoreAProjectInput,
  outputSchema: V1RestoreAProjectOutput,
  errors: [BadRequest, Forbidden] as const,
}));
