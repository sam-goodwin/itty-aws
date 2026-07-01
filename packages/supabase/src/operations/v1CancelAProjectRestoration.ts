import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1CancelAProjectRestorationInput {
  ref: string;
}
export const V1CancelAProjectRestorationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/projects/{ref}/restore/cancel" }),
  ) as unknown as Schema.Codec<V1CancelAProjectRestorationInput>;

// Output Schema
export type V1CancelAProjectRestorationOutput = void;
export const V1CancelAProjectRestorationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<V1CancelAProjectRestorationOutput>;

// The operation
/**
 * Cancels the given project restoration
 *
 * @param ref - Project ref
 */
export const v1CancelAProjectRestoration = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1CancelAProjectRestorationInput,
    outputSchema: V1CancelAProjectRestorationOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
