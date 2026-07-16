import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface DestroyInput {
  id: string;
}
export const DestroyInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/api/organizations/{id}/" }),
) as unknown as Schema.Codec<DestroyInput>;

// Output Schema
export type DestroyOutput = void;
export const DestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this organization.
 */
export const destroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: DestroyInput,
  outputSchema: DestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
