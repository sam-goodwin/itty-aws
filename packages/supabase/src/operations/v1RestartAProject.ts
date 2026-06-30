import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export const V1RestartAProjectInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    ref: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "POST", path: "/v1/projects/{ref}/restart" }));
export type V1RestartAProjectInput = typeof V1RestartAProjectInput.Type;

// Output Schema
export const V1RestartAProjectOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type V1RestartAProjectOutput = typeof V1RestartAProjectOutput.Type;

// The operation
/**
 * Restarts the given project
 *
 * @param ref - Project ref
 */
export const v1RestartAProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1RestartAProjectInput,
  outputSchema: V1RestartAProjectOutput,
  errors: [Forbidden] as const,
}));
