import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const JumpWireWebDataVaultControllershowByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/vault/v1/kv/{id}" }));
export type JumpWireWebDataVaultControllershowByIdInput =
  typeof JumpWireWebDataVaultControllershowByIdInput.Type;

// Output Schema
export const JumpWireWebDataVaultControllershowByIdOutput =
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
    value: Schema.String,
  });
export type JumpWireWebDataVaultControllershowByIdOutput =
  typeof JumpWireWebDataVaultControllershowByIdOutput.Type;

// The operation
/**
 * Read an object by ID
 *
 * Fetch and decrypt an object by its unique identifier.
 *
 * @param id - Unique identifier of the object.
 */
export const JumpWireWebDataVaultControllershowById =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: JumpWireWebDataVaultControllershowByIdInput,
    outputSchema: JumpWireWebDataVaultControllershowByIdOutput,
    errors: [BadRequest, NotFound] as const,
  }));
