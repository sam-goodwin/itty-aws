import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface DeleteViewInput {
  id: string;
}
export const DeleteViewInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/v2/views/{id}" }),
) as unknown as Schema.Codec<DeleteViewInput>;

// Output Schema
export type DeleteViewOutput = void;
export const DeleteViewOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteViewOutput>;

// The operation
export const deleteView = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteViewInput,
  outputSchema: DeleteViewOutput,
  errors: [NotFound] as const,
}));
