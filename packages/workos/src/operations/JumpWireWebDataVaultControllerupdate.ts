import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Conflict } from "../errors.ts";

// Input Schema
export interface JumpWireWebDataVaultControllerupdateInput {
  id: string;
  value: string;
  version_check?: string | null;
}
export const JumpWireWebDataVaultControllerupdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    value: Schema.String,
    version_check: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({ method: "PUT", path: "/vault/v1/kv/{id}" }),
  ) as unknown as Schema.Codec<JumpWireWebDataVaultControllerupdateInput>;

// Output Schema
export interface JumpWireWebDataVaultControllerupdateOutput {
  id: string;
  metadata: {
    context: Record<string, string>;
    environment_id: string;
    id: string;
    key_id: string;
    updated_at: string;
    updated_by: { id: string; name: string };
    version_id?: string | null;
  };
  name: string;
}
export const JumpWireWebDataVaultControllerupdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    metadata: Schema.Struct({
      context: Schema.Record(Schema.String, Schema.String),
      environment_id: Schema.String,
      id: Schema.String,
      key_id: Schema.String,
      updated_at: Schema.String,
      updated_by: Schema.Struct({
        id: Schema.String,
        name: Schema.String,
      }),
      version_id: Schema.optional(Schema.NullOr(Schema.String)),
    }),
    name: Schema.String,
  }) as unknown as Schema.Codec<JumpWireWebDataVaultControllerupdateOutput>;

// The operation
/**
 * Update an object
 *
 * Update the value of an existing encrypted object.
 *
 * @param id - Unique identifier of the object.
 */
export const JumpWireWebDataVaultControllerupdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: JumpWireWebDataVaultControllerupdateInput,
    outputSchema: JumpWireWebDataVaultControllerupdateOutput,
    errors: [BadRequest, Conflict] as const,
  }));
