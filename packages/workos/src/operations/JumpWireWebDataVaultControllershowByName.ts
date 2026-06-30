import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const JumpWireWebDataVaultControllershowByNameInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/vault/v1/kv/name/{name}" }));
export type JumpWireWebDataVaultControllershowByNameInput =
  typeof JumpWireWebDataVaultControllershowByNameInput.Type;

// Output Schema
export const JumpWireWebDataVaultControllershowByNameOutput =
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
export type JumpWireWebDataVaultControllershowByNameOutput =
  typeof JumpWireWebDataVaultControllershowByNameOutput.Type;

// The operation
/**
 * Read an object by name
 *
 * Fetch and decrypt an object by its unique name.
 *
 * @param name - Unique name of the object.
 */
export const JumpWireWebDataVaultControllershowByName =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: JumpWireWebDataVaultControllershowByNameInput,
    outputSchema: JumpWireWebDataVaultControllershowByNameOutput,
    errors: [BadRequest, NotFound] as const,
  }));
