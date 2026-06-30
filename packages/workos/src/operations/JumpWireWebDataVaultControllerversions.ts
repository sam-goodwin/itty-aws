import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export interface JumpWireWebDataVaultControllerversionsInput {
  id: string;
}
export const JumpWireWebDataVaultControllerversionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/vault/v1/kv/{id}/versions" }),
  ) as unknown as Schema.Codec<JumpWireWebDataVaultControllerversionsInput>;

// Output Schema
export interface JumpWireWebDataVaultControllerversionsOutput {
  data: {
    created_at: string;
    current_version: boolean;
    etag: string;
    id: string;
    size: number;
  }[];
  list_metadata: { after?: string | null; before?: string | null };
}
export const JumpWireWebDataVaultControllerversionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        created_at: Schema.String,
        current_version: Schema.Boolean,
        etag: Schema.String,
        id: Schema.String,
        size: Schema.Number,
      }),
    ),
    list_metadata: Schema.Struct({
      after: Schema.optional(Schema.NullOr(Schema.String)),
      before: Schema.optional(Schema.NullOr(Schema.String)),
    }),
  }) as unknown as Schema.Codec<JumpWireWebDataVaultControllerversionsOutput>;

// The operation
/**
 * List object versions
 *
 * Retrieve all versions for a specific object.
 *
 * @param id - Unique identifier of the object.
 */
export const JumpWireWebDataVaultControllerversions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: JumpWireWebDataVaultControllerversionsInput,
    outputSchema: JumpWireWebDataVaultControllerversionsOutput,
    errors: [BadRequest, NotFound] as const,
  }));
