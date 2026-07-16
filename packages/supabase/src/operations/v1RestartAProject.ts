import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export interface V1RestartAProjectInput {
  ref: string;
}
export const V1RestartAProjectInput = /*@__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "POST", path: "/v1/projects/{ref}/restart" }),
) as unknown as Schema.Codec<V1RestartAProjectInput>;

// Output Schema
export type V1RestartAProjectOutput = void;
export const V1RestartAProjectOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1RestartAProjectOutput>;

// The operation
/**
 * Restarts the given project
 *
 * @param ref - Project ref
 */
export const v1RestartAProject = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1RestartAProjectInput,
  outputSchema: V1RestartAProjectOutput,
  errors: [Forbidden] as const,
}));
