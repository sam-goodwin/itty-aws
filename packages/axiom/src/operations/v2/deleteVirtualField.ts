import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface DeleteVirtualFieldInput {
  id: string;
}
export const DeleteVirtualFieldInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v2/vfields/{id}" }),
  ) as unknown as Schema.Codec<DeleteVirtualFieldInput>;

// Output Schema
export type DeleteVirtualFieldOutput = void;
export const DeleteVirtualFieldOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteVirtualFieldOutput>;

// The operation
export const deleteVirtualField = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteVirtualFieldInput,
  outputSchema: DeleteVirtualFieldOutput,
  errors: [NotFound] as const,
}));
