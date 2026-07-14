import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, Conflict } from "../errors.ts";

// Input Schema
export interface JumpWireWebDataVaultControllerdeleteInput {
  id: string;
  version_check?: string;
}
export const JumpWireWebDataVaultControllerdeleteInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    version_check: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "DELETE", path: "/vault/v1/kv/{id}" }),
  ) as unknown as Schema.Codec<JumpWireWebDataVaultControllerdeleteInput>;

// Output Schema
export interface JumpWireWebDataVaultControllerdeleteOutput {
  name: string;
  success: boolean;
}
export const JumpWireWebDataVaultControllerdeleteOutput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String,
    success: Schema.Boolean,
  }) as unknown as Schema.Codec<JumpWireWebDataVaultControllerdeleteOutput>;

// The operation
/**
 * Delete an object
 *
 * Delete an encrypted object.
 *
 * @param id - Unique identifier of the object.
 * @param version_check - Expected current version for optimistic locking.
 */
export const JumpWireWebDataVaultControllerdelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: JumpWireWebDataVaultControllerdeleteInput,
    outputSchema: JumpWireWebDataVaultControllerdeleteOutput,
    errors: [NotFound, Conflict] as const,
  }));
