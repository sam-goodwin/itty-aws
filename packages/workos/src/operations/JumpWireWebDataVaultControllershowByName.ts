import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export interface JumpWireWebDataVaultControllershowByNameInput {
  name: string;
}
export const JumpWireWebDataVaultControllershowByNameInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/vault/v1/kv/name/{name}" }),
  ) as unknown as Schema.Codec<JumpWireWebDataVaultControllershowByNameInput>;

// Output Schema
export interface JumpWireWebDataVaultControllershowByNameOutput {
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
  value: string;
}
export const JumpWireWebDataVaultControllershowByNameOutput =
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
    value: Schema.String,
  }) as unknown as Schema.Codec<JumpWireWebDataVaultControllershowByNameOutput>;

// The operation
/**
 * Read an object by name
 *
 * Fetch and decrypt an object by its unique name.
 *
 * @param name - Unique name of the object.
 */
export const JumpWireWebDataVaultControllershowByName =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: JumpWireWebDataVaultControllershowByNameInput,
    outputSchema: JumpWireWebDataVaultControllershowByNameOutput,
    errors: [BadRequest, NotFound] as const,
  }));
