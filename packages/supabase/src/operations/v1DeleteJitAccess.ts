import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1DeleteJitAccessInput {
  ref: string;
  user_id: string;
}
export const V1DeleteJitAccessInput = /*@__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
  user_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/v1/projects/{ref}/database/jit/{user_id}",
  }),
) as unknown as Schema.Codec<V1DeleteJitAccessInput>;

// Output Schema
export type V1DeleteJitAccessOutput = void;
export const V1DeleteJitAccessOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1DeleteJitAccessOutput>;

// The operation
/**
 * Delete JIT access by user-id
 *
 * Remove JIT mappings of a user, revoking all JIT database access
 *
 * @param ref - Project ref
 */
export const v1DeleteJitAccess = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1DeleteJitAccessInput,
  outputSchema: V1DeleteJitAccessOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
