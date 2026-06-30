import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Conflict } from "../errors.ts";

// Input Schema
export const JumpWireWebDataVaultControllerupdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    value: Schema.String,
    version_check: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(T.Http({ method: "PUT", path: "/vault/v1/kv/{id}" }));
export type JumpWireWebDataVaultControllerupdateInput =
  typeof JumpWireWebDataVaultControllerupdateInput.Type;

// Output Schema
export const JumpWireWebDataVaultControllerupdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type JumpWireWebDataVaultControllerupdateOutput =
  typeof JumpWireWebDataVaultControllerupdateOutput.Type;

// The operation
/**
 * Update an object
 *
 * Update the value of an existing encrypted object.
 *
 * @param id - Unique identifier of the object.
 */
export const JumpWireWebDataVaultControllerupdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: JumpWireWebDataVaultControllerupdateInput,
    outputSchema: JumpWireWebDataVaultControllerupdateOutput,
    errors: [BadRequest, Conflict] as const,
  }));
