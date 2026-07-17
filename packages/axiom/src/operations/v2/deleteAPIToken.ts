import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface DeleteAPITokenInput {
  id: string;
}
export const DeleteAPITokenInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/v2/tokens/{id}" }),
) as unknown as Schema.Codec<DeleteAPITokenInput>;

// Output Schema
export type DeleteAPITokenOutput = void;
export const DeleteAPITokenOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteAPITokenOutput>;

// The operation
/**
 * Delete API token
 */
export const deleteAPIToken = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteAPITokenInput,
  outputSchema: DeleteAPITokenOutput,
  errors: [NotFound] as const,
}));
