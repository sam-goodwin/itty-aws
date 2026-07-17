import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface DeleteStarredInput {
  id: string;
}
export const DeleteStarredInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/v2/apl-starred-queries/{id}" }),
) as unknown as Schema.Codec<DeleteStarredInput>;

// Output Schema
export type DeleteStarredOutput = void;
export const DeleteStarredOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteStarredOutput>;

// The operation
export const deleteStarred = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteStarredInput,
  outputSchema: DeleteStarredOutput,
  errors: [NotFound] as const,
}));
