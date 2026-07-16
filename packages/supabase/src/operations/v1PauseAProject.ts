import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1PauseAProjectInput {
  ref: string;
}
export const V1PauseAProjectInput = /*@__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "POST", path: "/v1/projects/{ref}/pause" }),
) as unknown as Schema.Codec<V1PauseAProjectInput>;

// Output Schema
export type V1PauseAProjectOutput = void;
export const V1PauseAProjectOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1PauseAProjectOutput>;

// The operation
/**
 * Pauses the given project
 *
 * @param ref - Project ref
 */
export const v1PauseAProject = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1PauseAProjectInput,
  outputSchema: V1PauseAProjectOutput,
  errors: [BadRequest, Forbidden] as const,
}));
